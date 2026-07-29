export interface HomeData {
  brand: Brand;
  hero: Hero;
  productShowcase: ProductShowcase;
  services: ServiceItem[];
  factoryGallery: FactoryGalleryItem[];
  qualifications: string[];
  businessLicenseImage: string;
  trademarkRegistrationImage: string;
  contact: Contact;
}

export interface Brand {
  name: string;
  company: string;
  logo: string;
  originTitle: string;
  originCopy: string[];
}

export interface Hero {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}

export interface ProductShowcase {
  eyebrow: string;
  title: string;
  copy: string;
  series: ProductSeries[];
}

export interface ProductSeries {
  key: string;
  name: string;
  summary: string;
  coverImage: string;
  products: ProductItem[];
}

export interface ProductItem {
  name: string;
  description: string;
  images: string[];
}

export interface ServiceItem {
  title: string;
  image: string;
}

export interface FactoryGalleryItem {
  title: string;
  copy: string;
  image: string;
}

export interface Contact {
  name: string;
  label: string;
  qrImage: string;
  whatsappUrl: string;
  email: string;
  instagramHandle: string;
  instagramQrImage: string;
  instagramUrl: string;
}
