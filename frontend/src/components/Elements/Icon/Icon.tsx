import { clsx } from "clsx";
import type { IconType } from "react-icons/lib";

const sizes = {
  xs: 10,
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
};

export type IconProps = {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  disabled?: boolean;
  classname?: string;
  icon: IconType;
};

export function Icon({
  size = "sm",
  color = "dark",
  classname,
  disabled,
  icon,
}: IconProps) {
  return (
    <i
      className={clsx(
        "icon",
        classname,
        colors[color],
        `${disabled ? "opacity-50 pointer-events-none" : "opacity-100"}`,
      )}
    >
      {icon({ size: sizes[size] })}
    </i>
  );
}
