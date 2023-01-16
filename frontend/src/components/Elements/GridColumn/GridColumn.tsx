export type GridColumnProps = {
  span: number;
  offset: number;
  className?: string;
  children: React.ReactNode;
  textAlign: "left" | "center" | "right";
};

export function GridColumn({
  span,
  offset = 0,
  className,
  children,
  textAlign,
}: GridColumnProps) {
  const colSpanClass = `col-span-${span}`;
  const colOffsetClass = `col-start-${offset + 1}`;

  const textAlignClass = `text-${textAlign}`;

  return (
    <div
      className={`${colSpanClass} ${colOffsetClass} ${textAlignClass} ${className}`}
    >
      {children}
    </div>
  );
}
