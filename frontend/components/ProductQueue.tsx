import { Product } from "../types/Product";

interface Props {
  products: Product[];
}

export default function ProductQueue({ products }: Props) {

  if (products.length === 0) {
    return (
      <div className="mt-8 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">
          Product Queue
        </h2>

        <p className="mt-4 text-slate-500">
          No products imported.
        </p>
      </div>
    );
  }

  return (

    <div className="mt-8 rounded-xl border p-6">

      <h2 className="text-xl font-semibold mb-6">
        Imported Products
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left pb-3">
              Product
            </th>

            <th className="text-left pb-3">
              Vendor
            </th>

            <th className="text-left pb-3">
              Price
            </th>

            <th className="text-left pb-3">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product, index) => (

            <tr
              key={index}
              className="border-b"
            >

              <td className="py-3">
                {product.title}
              </td>

              <td>
                {product.vendor}
              </td>

              <td>
                ${product.price}
              </td>

              <td>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">

                  Ready

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}