import clsx from "clsx";

export type NumericStepperProps = {
  className?: string;
  initialValue: number;
  min: number;
  max: number;
  value: number;
  decrement?: () => void;
  increment?: () => void;
};

export function NumericStepper({
  className,
  initialValue = 0,
  min,
  max,
  value,
  decrement,
  increment,
}: NumericStepperProps) {
  const classes = clsx(
    "flex ring-1 ring-sonic-silver overflow-hidden rounded-md",
    className,
  );

  return (
    <div className={classes}>
      <button
        type="button"
        className="px-2 border-r border-r-onyx border-solid border-l-transparent border-y-transparent"
        onClick={() => decrement?.()}
      >
        -
      </button>
      <input
        type="text"
        value={value || initialValue}
        className="w-12 text-center"
        readOnly
      />
      <button
        type="button"
        className="px-2 border-l border-l-onyx border-solid border-r-transparent border-y-transparent"
        onClick={() => increment?.()}
      >
        +
      </button>
    </div>
  );
}
