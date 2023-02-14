import { clsx } from "clsx";

import type { IconType } from "react-icons/lib";

const sizes = {
  xs: 15,
  sm: 20,
  md: 30,
  lg: 40,
  xl: 60,
};

const colors = {
  pink: "text-salmon-pink",
  onyx: "text-onyx",
  dark: "text-onyx-eerie-black",
  silver: "text-sonic-silver",
  white: "text-white",
};

export type IconProps = {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  disabled?: boolean;
  className?: string;
  icon: IconType;
};

export function Icon({
  size = "sm",
  color = "dark",
  className,
  disabled,
  icon,
}: IconProps) {
  return (
    <i
      className={clsx(
        "icon",
        className,
        colors[color],
        `${disabled ? "opacity-50 pointer-events-none" : "opacity-100"}`,
      )}
    >
      {icon({ size: sizes[size] })}
    </i>
  );
}
