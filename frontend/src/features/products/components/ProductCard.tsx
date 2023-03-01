import { observer } from "mobx-react-lite";
import { IoBagAddOutline, IoEyeOutline } from "react-icons/io5";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { Image } from "@/components/Elements/Image";
import { LoginModal } from "@/features/auth/components/LoginModal";
import { useAddItemToCart } from "@/features/cart/api/addItemToCart";
import { LikeButton } from "@/features/like";
import { useStore } from "@/stores";

import type { ProductBriefDto } from "../types";

type ProductCardProps = {
  product: ProductBriefDto;
};

export const ProductCard = observer(({ product }: ProductCardProps) => {
  const addItemToCartMutation = useAddItemToCart({});

  const {
    authStore: { isLoggedIn },
    modalStore: { openModal },
  } = useStore();

  function handleAddItemToCart(productDto: ProductBriefDto) {
    if (isLoggedIn) {
      addItemToCartMutation.mutate(productDto);
    } else {
      openModal(<LoginModal />);
    }
  }

  return (
    <article className="group relative bg-white overflow-hidden rounded-md shadow-lg">
      <div className="relative">
        <Image src={product.pictureUrl} fluid />
        <div className="absolute -right-20 opacity-0 top-0 transform translate-y-8 transition-all ease-in-out group-hover:right-2 group-hover:opacity-100">
          <LikeButton liked={product.isLikedByTheUser} productId={product.id} />

          <Button size="xs" variant="light" className="mb-1">
            <Icon icon={IoEyeOutline} />
          </Button>

          <Button
            size="xs"
            variant="light"
            onClick={() => handleAddItemToCart(product)}
          >
            <Icon icon={IoBagAddOutline} />
          </Button>
        </div>
      </div>
      <div className="p-6 text-start">
        <h2 className="text-2xl text-sonic-silver overflow-hidden relative max-h-[calc(2_*_1em_*_1.3)] cursor-pointer mb-3 hover:text-eerie-black">
          {product.name}
        </h2>
        <div>
          <span className="mr-1 font-semibold">
            {product.defaultPrice?.currency?.symbol}
          </span>
          <span className="text-eerie-black text-2xl font-semibold">
            {product.defaultPrice?.amount}
          </span>
        </div>
      </div>
    </article>
  );
});
