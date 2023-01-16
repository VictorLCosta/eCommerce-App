import { clsx } from "clsx";
import _ from "lodash"; // FIXME: Lodash bundle too heavy
import { createRef } from "react";

import { useKeyOnly } from "@/lib/classNameBuilders";
import { isNil } from "@/utils/childrenUtils";

import { Icon } from "../Icon";
import { Spinner } from "../Spinner";

import type { IconType } from "react-icons/lib";

const variants = {
  primary: "bg-salmon-pink text-white enabled:hover:bg-onyx",
  secondary:
    "bg-cultured2 text-sonic-silver enabled:hover:bg-salmon-pink enabled:hover:text-white",
  basic: "bg-transparente text-onyx",
  danger: "bg-red-600 text-white",
  dark: "bg-white text-sonic-silver border border-solid border-cultured2 enabled:hover:bg-eerie-black enabled:hover:text-white enabled:hover:border-eerie-black",
};

const sizes = {
  xs: "p-2 text-sm",
  sm: "py-2 px-4 text-md",
  md: "py-3 px-6 text-lg",
  lg: "py-4 px-8 text-xl",
  xl: "py-6 px-12 text-2xl",
  "2xl": "py-6 px-16 text-4xl",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  circular?: boolean;
  content?: React.ReactNode;
  fluid?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
  icon?: IconType;
};

export function Button({
  className,
  circular,
  fluid,
  loading,
  size = "md",
  variant = "primary",
  icon,
  ...props
}: ButtonProps) {
  const ref = createRef<HTMLButtonElement>();
  const hasChildren = !isNil(props.children);
  const classes = clsx(
    "flex justify-center items-center relative min-w-[1em] overflow-hidden disabled:opacity-70 disabled:cursor-normal rounded-sm font-medium focus:outline-none transition ease-in",
    sizes[size],
    variants[variant],
    className,
    useKeyOnly(fluid, "!w-full"),
    useKeyOnly(circular, "!rounded-full"),
  );

  const computeButtonAriaRole = () => {
    const { role } = props;

    if (!_.isNil(role)) return role;

    return "button";
  };

  const computeTabIndex = () => {
    const { disabled, tabIndex } = props;

    if (!_.isNil(tabIndex)) return tabIndex;
    if (disabled) return -1;

    return tabIndex;
  };

  function computeContent() {
    const { children, content } = props;

    const baseContent = hasChildren ? children : content;

    if (icon && !baseContent) return <Icon icon={icon} />;

    if (icon && baseContent)
      return (
        <>
          <Icon icon={icon} />
          <span className="mx-2">{baseContent}</span>
        </>
      );

    return baseContent;
  }

  const loadingContainer = (
    <div className="absolute flex items-center justify-center top-0 w-full h-full cursor-normal bg-inherit">
      <Spinner size="lg" />
    </div>
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { disabled } = props;

    if (disabled || loading) {
      e.preventDefault();
      return;
    }

    _.invoke(props, "onClick", e, props);
  };

  return (
    <button
      ref={ref}
      className={classes}
      disabled={props.disabled || loading}
      role={computeButtonAriaRole()}
      type={props.type === "submit" ? "submit" : "button"}
      tabIndex={computeTabIndex()}
      onClick={handleClick}
    >
      {loading && loadingContainer}
      {computeContent()}
    </button>
  );
}
