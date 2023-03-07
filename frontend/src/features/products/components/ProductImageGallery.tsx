import { useState } from "react";

import { Image } from "@/components/Elements/Image";

import { useProductImages } from "../api/getProductImages";

export function ProductImageGallery({ productId }: { productId: string }) {
  const { data } = useProductImages({ productId });

  const [currentImage, setCurrentImage] = useState(data?.find((x) => x.isMain));

  return (
    <div>
      <Image src={currentImage?.url} />
      <div>
        {data?.map((image) => (
          <Image key={image.id} src={image.url} />
        ))}
      </div>
    </div>
  );
}
