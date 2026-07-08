interface Props {
  productCount: number;
}

export default function StatusCards({ productCount }: Props) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-6">

      <div className="rounded-xl border p-6">
        <h3 className="font-semibold">Products Waiting</h3>
        <p className="mt-3 text-4xl font-bold">
          {productCount}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="font-semibold">Stories Generated</h3>
        <p className="mt-3 text-4xl font-bold">
          0
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="font-semibold">System Status</h3>

        <p className="mt-3 text-green-600 font-semibold">
          ● Emma Ready
        </p>

      </div>

    </div>
  );
}