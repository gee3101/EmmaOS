export interface RemoveBackgroundResult {

  success: boolean;

  image?: Buffer;

  contentType?: string;

  error?: string;

}

export class RemoveBgClient {

  //------------------------------------------
  // Configuration
  //------------------------------------------

  private readonly endpoint =
    "https://api.remove.bg/v1.0/removebg";

  //------------------------------------------
  // Remove Background
  //------------------------------------------

  async removeBackground(
    image: File
  ): Promise<RemoveBackgroundResult> {

    const apiKey =
      process.env.REMOVE_BG_API_KEY;

    if (!apiKey) {

      throw new Error(
        "REMOVE_BG_API_KEY is not configured."
      );

    }

    const formData =
      new FormData();

    formData.append(
      "image_file",
      image
    );

    formData.append(
      "size",
      "auto"
    );

    const response =
      await fetch(
        this.endpoint,
        {

          method: "POST",

          headers: {

            "X-Api-Key":
              apiKey,

          },

          body: formData,

        }
      );

    if (!response.ok) {

      return {

        success: false,

        error:
          await response.text(),

      };

    }

    const arrayBuffer =
      await response.arrayBuffer();

    return {

      success: true,

      image:
        Buffer.from(arrayBuffer),

      contentType:
        response.headers.get(
          "content-type"
        ) ?? "image/png",

    };

  }

}

export const removeBgClient =
  new RemoveBgClient();