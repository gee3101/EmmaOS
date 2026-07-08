import Papa, { ParseResult } from "papaparse";
import { Product } from "../types/Product";

export function parseShopifyCSV(
  file: File
): Promise<Product[]> {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onload = () => {

      const csv = reader.result;

      if (typeof csv !== "string") {
        reject(new Error("Unable to read CSV file."));
        return;
      }

      try {

        Papa.parse<Record<string, string>>(csv, {

          header: true,

          skipEmptyLines: true,

          complete(results: ParseResult<Record<string, string>>) {

            const productMap =
              new Map<string, Product>();

            results.data.forEach((row) => {

              const handle =
                row["Handle"] || "";

              //----------------------------------
              // Skip duplicate variants
              //----------------------------------

              if (productMap.has(handle)) {
                return;
              }

              productMap.set(handle, {

                //----------------------------------
                // Shopify Fields
                //----------------------------------

                title:
                  row["Title"] || "",

                vendor:
                  row["Vendor"] || "",

                price:
                  row["Variant Price"] ||
                  row["Variant Price / International"] ||
                  "",

                description:
                  row["Body (HTML)"] || "",

                productType:
                  row["Product Category"] ||
                  row["Type"] ||
                  "",

                tags:
                  row["Tags"] || "",

                sku:
                  row["Variant SKU"] || "",

                handle,

                //----------------------------------
                // Emma Intelligence
                //----------------------------------

                relationship: "",

                occasion: "",

                emotion: "",

                giftType: "",

                confidence: 0,

              });

            });

            resolve(
              Array.from(productMap.values())
            );

          },

        });

      } catch (err) {

        reject(err);

      }

    };

    reader.onerror = () => {

      reject(
        new Error("Failed to read CSV file.")
      );

    };

    reader.readAsText(file);

  });

}