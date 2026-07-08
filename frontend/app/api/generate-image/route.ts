import { NextRequest, NextResponse } from "next/server";

import { CreativeBrief } from "../../../types/CreativeBrief";
import { openAIImageService } from "../../../services/AI/OpenAI/OpenAIImagesService";

function createRequestId(): string {
  return `IMG-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase()}`;
}

export async function POST(request: NextRequest) {

  const requestId = createRequestId();

  const startTime = Date.now();

  try {

    //------------------------------------------
    // Validate Environment
    //------------------------------------------

    if (!process.env.OPENAI_API_KEY) {

      return NextResponse.json(
        {
          success: false,
          requestId,
          error: "OPENAI_API_KEY is not configured.",
        },
        { status: 500 }
      );

    }

    //------------------------------------------
    // Parse FormData
    //------------------------------------------

    const formData = await request.formData();

    const briefString = formData.get("brief");

    if (typeof briefString !== "string") {

      return NextResponse.json(
        {
          success: false,
          requestId,
          error: "CreativeBrief is required.",
        },
        { status: 400 }
      );

    }

    const brief =
      JSON.parse(briefString) as CreativeBrief;

    //------------------------------------------
    // Uploaded Product Image
    //------------------------------------------

    const productImage =
      formData.get("productImage");

    //------------------------------------------
    // Logging
    //------------------------------------------

    console.log("");

    console.log("=====================================");
    console.log("EmmaOS Image Generation");
    console.log("=====================================");

    console.log(`Request: ${requestId}`);
    console.log(`Product: ${brief.productTitle}`);
    console.log(`Platform: ${brief.platform}`);
    console.log(`Placement: ${brief.placement}`);
    console.log(`Strategy: ${brief.strategy}`);
    console.log(
      `Product Image Uploaded: ${
        productImage instanceof File ? "YES" : "NO"
      }`
    );

    //------------------------------------------
    // Generate Image
    //------------------------------------------

    const asset =
      await openAIImageService.generateImage(
        brief,
        productImage instanceof File
          ? productImage
          : null
      );

    //------------------------------------------
    // Complete
    //------------------------------------------

    const elapsed =
      Date.now() - startTime;

    console.log(`Completed in ${elapsed}ms`);

    return NextResponse.json({
      success: true,
      requestId,
      asset,
    });

  } catch (error) {

    console.error("");

    console.error("=====================================");
    console.error("EmmaOS Generation Error");
    console.error("=====================================");

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        requestId,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error.",
      },
      {
        status: 500,
      }
    );

  }

}