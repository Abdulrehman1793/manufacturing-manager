export interface RawGoods {
  id: number;
  name: string;
  description: string;
  upc: string;
  reorderQty: number;
  minQty: number;
  qtyOnHand: number;
  amount: number;
  purchaseUnitQty: number;
  type: string;
  uom: string;
  purchaseUnit: string;
}
