import { ProductType } from '../../product-type/models/product-type';

export interface Cost {
  id: number;
  name: string;
  description: string;
  type: string;
  costUnit: string;
  amount: number;
}
