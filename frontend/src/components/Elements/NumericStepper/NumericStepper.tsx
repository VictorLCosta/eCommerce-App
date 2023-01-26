import clsx from "clsx";
import { useState } from "react";

export type NumericStepperProps = {
  className?: string;
  initialValue: number;
  min: number;
  max: number;
  onChange?: () => void;
};

export function NumericStepper({
  className,
  initialValue = 0,
  min,
  max,
  onChange,
}: NumericStepperProps) {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const classes = clsx(
    "flex ring-1 ring-sonic-silver overflow-hidden rounded-md",
    className,
  );

  return (
    <div className={classes}>
      <button
        type="button"
        className="px-2 border-r border-r-onyx border-solid border-l-transparent border-y-transparent"
        onClick={() => handleDecrement()}
      >
        -
      </button>
      <input
        type="text"
        value={value}
        className="w-12 text-center"
        onChange={onChange}
        readOnly
      />
      <button
        type="button"
        className="px-2 border-l border-l-onyx border-solid border-r-transparent border-y-transparent"
        onClick={() => handleIncrement()}
      >
        +
      </button>
    </div>
  );
}
