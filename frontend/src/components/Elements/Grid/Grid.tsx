import clsx from "clsx";
import React from "react";

import { useKeyOnly } from "@/lib/classNameBuilders";

export type GridProps = {
  centered?: boolean;
  columns: number;
  rows: number;
  gap: string;
  columnGap: string;
  rowGap: string;
  className: string;
  children: React.ReactNode;
};

export function Grid({
  centered,
  columns = 1,
  rows = 1,
  gap = "0",
  columnGap = "0",
  rowGap = "0",
  className,
  children,
}: GridProps) {
  const classes = clsx(
    "grid",
    `grid-cols-${columns}`,
    `grid-rows-${rows}`,
    `gap-${gap}`,
    `col-gap-${columnGap}`,
    `row-gap-${rowGap}`,
    useKeyOnly(centered, "!text-center"),
    className,
  );

  return <div className={classes}>{children}</div>;
}
