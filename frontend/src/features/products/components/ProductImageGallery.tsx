import { useEffect, useState } from "react";

import { Image } from "@/components/Elements/Image";

import { useProductImages } from "../api/getProductImages";

export function ProductImageGallery({ productId }: { productId: string }) {
  const { data } = useProductImages({ productId });

  const [currentImage, setCurrentImage] = useState(() => {
    const initialState = data?.find((x) => x.isMain);
    return initialState;
  });

  useEffect(() => {
    setCurrentImage(data?.find((x) => x.isMain));
  }, [data]);

  return (
    <div>
      <Image src={currentImage?.url} fluid size="lg" className="mb-2" />
      <div className="flex gap-x-4">
        {data?.map((image) => (
          <button
            key={image.id}
            type="button"
            onMouseEnter={() => setCurrentImage(image)}
          >
            <Image
              src={image.url}
              className={`${
                image === currentImage ? "ring-2 ring-eerie-black" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
