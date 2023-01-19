import find from "lodash/find";
import some from "lodash/some";
import { Children } from "react";

export const someByType = (children: React.ReactNode, type: string) =>
  some(Children.toArray(children), { type });

export const findByType = (children: React.ReactNode, type: string) =>
  find(Children.toArray(children), { type });

export const isNil = (children: React.ReactNode) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);
