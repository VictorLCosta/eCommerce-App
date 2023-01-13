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
