import _ from "lodash";
import { Children } from "react";

export const someByType = (children: React.ReactNode, type: string) =>
  _.some(Children.toArray(children), { type });

export const findByType = (children: React.ReactNode, type: string) =>
  _.find(Children.toArray(children), { type });

export const isNil = (children: React.ReactNode) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);
