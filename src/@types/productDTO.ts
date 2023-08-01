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
  installmentsValue: string;
  installmentsValueCents: string;
  images: string[];
  benefits: {
    icon: string;
    description: string;
  }[];
}
