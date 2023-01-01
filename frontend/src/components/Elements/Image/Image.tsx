import clsx from "clsx";

import { useKeyOnly } from "@/lib/classNameBuilders";

const sizes = {
  xs: "max-w-[80px]",
  sm: "max-w-[150px]",
  md: "max-w-[300px]",
  lg: "max-w-[450px]",
  xl: "max-w-[600px]",
  "2xl": "max-w-[800px]",
};

export type ImageProps = {
  alt?: string;
  avatar?: boolean;
  bordered?: boolean;
  className?: string;
  circular?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  size?: keyof typeof sizes;
  src?: string;
};

export default function Image({
  alt,
  avatar,
  bordered,
  className,
  circular,
  disabled,
  fluid,
  rounded,
  size = "md",
  src,
}: ImageProps) {
  const baseClasses = clsx(
    "relative overflow-hidden flex justify-center items-center",
    useKeyOnly(avatar, "!w-9 !h-9"),
    useKeyOnly(bordered, "!p-2 border border-solid border-gray-400"),
    useKeyOnly(circular, "!p-2"),
    useKeyOnly(disabled, "cursor-default opacity-50"),
    useKeyOnly(fluid, "!max-w-full"),
    useKeyOnly(rounded, "!rounded-sm"),
    sizes[size],
    className,
  );

  const imgClasses = clsx(
    "object-cover w-full",
    useKeyOnly(avatar, "!rounded-full"),
    useKeyOnly(circular, "!rounded-full"),
  );

  return (
    <div className={baseClasses}>
      {src && <img src={src} className={imgClasses} alt={alt} />}
    </div>
  );
}
