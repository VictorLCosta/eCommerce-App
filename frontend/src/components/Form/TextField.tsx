/* eslint-disable react/jsx-props-no-spreading */
import { clsx } from "clsx";
import { useField } from "formik";
import _ from "lodash";
import { createRef } from "react";

import { Icon } from "@/components/Elements/Icon";
import { Spinner } from "@/components/Elements/Spinner";
import { useKeyOnly } from "@/lib/classNameBuilders";

import type { FieldHookConfig } from "formik";
import type { IconType } from "react-icons/lib";

const sizes = {
  xs: "px-4 py-[9px] text-sm",
  sm: "px-4 py-[10px] text-md",
  md: "px-4 py-[11px] text-lg",
  lg: "px-4 py-[12px] text-xl",
  xl: "px-4 py-[13px] text-2xl",
  "2xl": "px-4 py-[14px] text-3xl",
};

type IconProps =
  | { startIcon: IconType; endIcon?: never }
  | { endIcon: IconType; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type TextFieldProps = FieldHookConfig<string> & {
  fluid?: boolean;
  label?: string;
  size?: keyof typeof sizes;
  loading?: boolean;
} & IconProps;

export default function TextField({
  className,
  disabled,
  fluid,
  label,
  loading,
  size = "md",
  startIcon,
  endIcon,
  ...props
}: TextFieldProps) {
  const [field, meta] = useField(props);
  const hasError = !_.isNil(meta.error);

  const inputRef = createRef<HTMLInputElement>();

  const errorClasses =
    "!bg-red-100 !text-red-400 focus-within:!text-red-500 !border-none";

  const classes = clsx(
    "flex items-center w-fit gap-3 bg-white rounded-sm border border-solid border-cultured2 text-sonic-silver focus-within:border-onyx transition-colors",
    useKeyOnly(disabled, "opacity-70 bg-[#efefef4d]"),
    useKeyOnly(hasError, errorClasses),
    useKeyOnly(fluid, "!w-full"),
    sizes[size],
    className,
  );

  const computeIcon = (icon?: IconType) => {
    if (loading) return <Spinner variant="dark" />;
    if (icon) return <Icon icon={icon} classname="text-current" />;

    return false;
  };

  return (
    <>
      <div className={classes}>
        {startIcon && computeIcon(startIcon)}
        <input
          ref={inputRef}
          className={
            hasError
              ? "!bg-red-100 placeholder:text-red-400 focus:placeholder:text-red-500"
              : ""
          }
          disabled={disabled}
          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
          {...field}
        />
        {endIcon && computeIcon(endIcon)}
      </div>
      {hasError && <div className="text-red-600">{meta.error}</div>}
    </>
  );
}
