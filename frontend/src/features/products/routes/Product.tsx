import { useParams } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Head } from "@/components/Head";
import { LoginModal } from "@/features/auth/components/LoginModal";
import { useAddItemToCart } from "@/features/cart/api/addItemToCart";
import { useStore } from "@/stores";

import { useProduct } from "../api/getProduct";
import { ProductBranchInfo } from "../components/ProductBranchInfo";
import { ProductImageGallery } from "../components/ProductImageGallery";

export function Product() {
  const { productId } = useParams<{ productId: string }>();

  const {
    authStore: { isLoggedIn },
    modalStore: { openModal },
  } = useStore();

  const { data } = useProduct({ productId });
  const addItemToCartMutation = useAddItemToCart({});

  function handleClick(id: string) {
    if (isLoggedIn) {
      addItemToCartMutation.mutate(id);
    } else {
      openModal(<LoginModal />);
    }
  }

  if (!data) return null;

  return (
    <>
      <Head title={data.name} />
      <div className="bg-white flex flex-col md:flex-row gap-y-5 mb-3 py-4 shadow-4">
        <div className="md:flex-1 px-4">
          <ProductImageGallery productId={data.id} />
        </div>

        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-eerie-black text-2xl md:text-3xl">
            {data.name}
          </h2>

          <div className="flex justify-start items-center gap-x-5 text-xl">
            <div className="flex-auto border-solid border-spanish-gray border-r border-t-0 border-l-0 border-b-0">
              Rating
            </div>
            <div className="flex-auto border-solid border-spanish-gray border-r border-t-0 border-l-0 border-b-0">
              158 Reviews
            </div>
            <div className="flex-auto">649 Sold</div>
          </div>

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

          <div className="flex gap-x-3">
            <Button
              type="button"
              size="lg"
              content="Add to Cart"
              onClick={() => handleClick(data.id)}
            />
            {/* <LikeButton productId={data.id} /> */}
          </div>
        </div>
      </div>

      <ProductBranchInfo branchId={data.branchId} />

      <div className="bg-white rounded-[3px] w-full px-3 py-5 shadow-4">
        <h3 className="text-eerie-black text-3xl font-medium mb-4">
          Product Description
        </h3>
        <p className="text-xl text-onyx">{data.description}</p>
      </div>
    </>
  );
}
