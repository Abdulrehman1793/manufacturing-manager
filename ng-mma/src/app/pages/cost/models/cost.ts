import { ProductType } from '../../product-type/models/product-type';

export interface Cost {
  id: number;
  name: string;
  description: string;
  type: ProductType;
  costUnit: number;
  amount: number;
}
