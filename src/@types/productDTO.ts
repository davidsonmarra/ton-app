export interface ProductDTO {
  id: number;
  name: string;
  promo: string;
  img: string;
}

export interface ProductDetailsDTO {
  id: number;
  title: string;
  subTitle: string;
  oldPrice: string;
  currentPrice: string;
  bigImage: string[];
  smallImage: string[];
  benefits: {
    icon: string;
    description: string;
  }[];
}
