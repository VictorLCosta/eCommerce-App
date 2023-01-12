/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import clsx from "clsx";
import { useState } from "react";

import { useKeyOnly } from "@/lib/classNameBuilders";

export function Overlay() {
  const [active, setActive] = useState(true);

  const classes = clsx(
    "fixed top-0 left-0 w-full h-screen z-50 pointer-events-none",
    useKeyOnly(active, "bg-black/60 !pointer-events-auto"),
  );

  return <div className={classes} onClick={() => setActive(!active)} />;
}
