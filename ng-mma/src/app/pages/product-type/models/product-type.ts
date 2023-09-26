export interface ProductType {
  id: string;
  name: string;
  description: string;
  type: 'raw' | 'finished' | 'others';
}
