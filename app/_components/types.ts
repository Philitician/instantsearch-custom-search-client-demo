import type { Hit } from "instantsearch.js/es/types";

type Product = {
  productNumber: string;
  productName: string;
  productOwner: string;
  measureUnit: string | null;
  priceUnitCode: string | null;
  priceUnit: string | null;
  efoImageId: number | null;
  imageUrl: string | null;
  blockNumber: string | null;
  blockNumberLvl0: string | null;
  blockNumberLvl1: string | null;
  technicalDescription: string | null;
  productDescription: string | null;
  numberOfConductors: number | null;
  crossSection: number | null;
  gtin: string | null;
  assortment: boolean;
  articleNumber: string | null;
  updatedAt: string | null;
};

export type ProductRecordPart = Omit<Product, "updatedAt" | "measureUnit">;

export type SupplierRecordPart = {
  supplierName: string;
  salesPackage: number | null;
  stocked: boolean;
  price: number; // either netPrice or cataloguePrice
  priceToDate: string | null;
  priceFromDate: string;
  campaignPrice: number | null;
  campaignFromDate: string | null;
  campaignToDate: string | null;
  lowestPrice: number;
};

export type CategoryRecordPart = {
  lvl0: string | null;
  lvl1: string | null;
  lvl2: string | null;
};

export type ProductRecord = ProductRecordPart & {
  objectID: string;
  category: CategoryRecordPart;
  suppliers: SupplierRecordPart[];
};

export type ProductHit = Hit<ProductRecord>;
