import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useField } from "formik";
import { Fragment } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

import { useKeyOnly } from "@/lib/classNameBuilders";

import { Icon } from "../Elements/Icon";

const sizes = {
  xs: "p-2 w-[20rem] !text-sm",
  sm: "py-2 px-2 w-[24rem] !text-md",
  md: "py-3 px-2 w-[28rem] !text-lg",
  lg: "py-4 px-4 w-[32rem] !text-xl",
  xl: "py-6 px-4 w-[36rem] !text-2xl",
  "2xl": "py-6 px-4 w-[42rem] !text-3xl",
};

const variants = {
  primary: "bg-white rounded-sm text-sonic-silver hover:text-onyx",
  secondary: "bg-transparent text-sonic-silver hover:text-onyx",
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
  variant?: keyof typeof variants;
};

export default function SelectField({
  className,
  disabled,
  fluid,
  name,
  placeholder,
  size = "md",
  variant = "primary",
  options,
}: SelectFieldProps) {
  const [field, meta, helpers] = useField(name);

  const buttonClasses = clsx(
    "relative text-left",
    useKeyOnly(fluid, "!w-full"),
    sizes[size],
    variants[variant],
    className,
  );

  const optionsClasses = clsx(
    "absolute mt-1 max-h-60 z-30 overflow-auto rounded-sm bg-white py-1 !px-0 shadow-lg focus:outline-none sm:text-sm",
    "!w-fit",
    sizes[size],
  );

  const computeDefaultValue = (value: string) =>
    options ? options.find((option) => option.value === value)?.label : "";

  return (
    <>
      <Listbox
        name={name}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        disabled={disabled}
      >
        <div className="relative mt-1">
          <Listbox.Button className={buttonClasses} placeholder={placeholder}>
            <span className="block truncate">
              {computeDefaultValue(field.value)}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2">
              <Icon icon={FaChevronDown} size="xs" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={optionsClasses}>
              {options.map(({ label, value }) => (
                <Listbox.Option
                  value={value}
                  className={({ active }) =>
                    `relative py-2 pl-14 pr-4 select-none ${
                      active ? "bg-onyx text-white" : ""
                    }`
                  }
                  key={label.toString()}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Icon icon={AiOutlineCheck} aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {meta.error && <span>{meta.error}</span>}
    </>
  );
}
