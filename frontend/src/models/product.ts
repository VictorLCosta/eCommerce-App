import { Money } from "./money";

export interface ProductBriefDto {
    id: string;
    name: string;
    pictureUrl: string;
    priceLabel: string;
    localSeller: boolean;
    branchCity: string;
    salesNumber: number;
}

export interface Product {
    id: string;
    name: string;
    code: string;
    description: string;
    pictureUrl: string;
    defaultPrice: Money;
    branchId: string;
    branchName: string;
    type: string;
}