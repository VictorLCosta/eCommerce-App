import { useParams } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Head } from "@/components/Head";

import { useProduct } from "../api/getProduct";
import { ProductImageGallery } from "../components/ProductImageGallery";

export function Product() {
  const { productId } = useParams<{ productId: string }>();

  const { data } = useProduct({ productId });

  if (!data) return null;

  return (
    <>
      <Head title={data.name} />
      <div className="flex flex-col md:flex-row">
        <div className="bg-red-500 md:flex-1">
          <ProductImageGallery productId={data.id} />
        </div>

        <div className="bg-blue-500 md:flex-1">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-eerie-black text-2xl md:text-3xl">
            {data.name}
          </h2>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">
                  {data.defaultPrice.currency.symbol}
                </span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {data.defaultPrice.amount}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">Save 12%</p>
              <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <div>
            <Button type="button" content="Add to Cart" />
          </div>
        </div>
      </div>

      <div className="bg-white w-full">{data.branchName}</div>

      <div className="bg-white w-full">{data.description}</div>
    </>
  );
}
