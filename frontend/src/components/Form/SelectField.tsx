import clsx from "clsx";
import { useField } from "formik";
import Select from "react-select";

import { useKeyOnly } from "@/lib/classNameBuilders";

const sizes = {
  xs: "w-[20rem] !text-sm",
  sm: "w-[24rem] !text-md",
  md: "w-[28rem] !text-lg",
  lg: "w-[32rem] !text-xl",
  xl: "w-[36rem] !text-2xl",
  "2xl": "w-[42rem] !text-3xl",
};

export type Option = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  options: Option[];
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  fluid?: boolean;
  name: string;
  placeholder?: string;
  size?: keyof typeof sizes;
};

export default function SelectField({
  className,
  disabled,
  fluid,
  name,
  placeholder,
  size = "md",
  options,
}: SelectFieldProps) {
  const [field, meta, helpers] = useField(name);

  const classes = clsx(useKeyOnly(fluid, "!w-full"), sizes[size], className);

  const computeDefaultValue = (value: string) =>
    options ? options.find((option) => option.value === value) : "";

  return (
    <>
      <Select
        name={name}
        defaultValue={computeDefaultValue(field.value)}
        onChange={(option) => helpers.setValue((option as Option).value)}
        options={options}
        placeholder={placeholder}
        isDisabled={disabled}
        className={classes}
        classNames={{
          control: () =>
            "!shadow-none !border-transparent focus-within:ring-1 focus-within:ring-onyx",
          indicatorSeparator: () => "!bg-transparent",
          option: (state) =>
            `${
              state.isSelected ? "font-medium !bg-onyx" : "font-normal"
            } !cursor-pointer hover:bg-onyx hover:text-white`,
        }}
      />
      {meta.error && <span>{meta.error}</span>}
    </>
  );
}
