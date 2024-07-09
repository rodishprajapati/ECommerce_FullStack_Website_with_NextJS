export interface IProduct {
  product_name: string;
  _id: string;
}
export interface IcartItem {
  product_id: IProduct;
  _id: string;
  quantity: number;
}
