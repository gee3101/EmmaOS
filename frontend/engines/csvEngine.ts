import Papa from "papaparse";
import { Product } from "../types/Product";

export function parseShopifyCSV(file: File): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete(results) {
        try {
          const rows = results.data as Record<string, string>[];

          const productMap = new Map<string, Product>();

          rows.forEach((row) => {
            const handle = row["Handle"] || "";

            // Skip duplicate variants
            if (productMap.has(handle)) return;

            productMap.set(handle, {
              title: row["Title"] || "",
              handle,
              vendor: row["Vendor"] || "",
              productType:
                row["Product Category"] ||
                row["Type"] ||
                "",
              price:
                row["Variant Price"] ||
                row["Variant Price / International"] ||
                "",
              image:
                row["Image Src"] ||
                row["Image URL"] ||
                "",
              status: "Ready",

              description: row["Body (HTML)"] || "",
              tags: row["Tags"] || "",
              collections: row["Collection"] || "",

              processed: false,
            });
          });

          resolve(Array.from(productMap.values()));
        } catch (err) {
          reject(err);
        }
      },

      error(err) {
        reject(err);
      },
    });
  });
}