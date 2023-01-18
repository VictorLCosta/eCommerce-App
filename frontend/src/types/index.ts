export type BaseEntity = {
  id: string;
  createdAt: Date | null;
};

export type Money = {
  amount: number;
  currency: {
    name: string;
    symbol: string;
  };
};

export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
