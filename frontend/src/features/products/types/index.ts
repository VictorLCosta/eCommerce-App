import type { BaseEntity, Money } from "@/types";

export type Product = {
  id: string;
  name: string;
  code: string;
  description: string;
  pictureUrl: string;
  defaultPrice: Money;
  branchId: string;
  branchName: string;
  type: string;
} & BaseEntity;
