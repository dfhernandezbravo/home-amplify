import { GenericProp } from './generic-prop';
import { ProductItems } from './product-items';

export type Product = {
  productId: string;
  productName: string;
  brand: string;
  imageUrl: string;
  prices: {
    brandPrice?: number;
    currency: string;
    normalPrice?: number;
    offerPrice?: number;
  };
  brandId: number;
  brandImageUrl?: null;
  linkText: string;
  productReference: string;
  productReferenceCode: string;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: string;
  clusterHighlights: GenericProp;
  productClusters: GenericProp;
  searchableClusters: GenericProp;
  categories?: string[];
  categoriesIds?: string[];
  link: string;
  'Tipo de Pilas'?: string[];
  Capacidad?: string[];
  'Tipo de Encendido'?: string[];
  'Tipo de gas'?: string[];
  Tiro?: string[];
  'Características destacadas'?: string[];
  Dimensiones?: string[];
  Material?: string[];
  Materiales?: string[];
  'Regulador de Agua'?: string[];
  'Regulador de Gas'?: string[];
  Sensor?: string[];
  Funciones?: string[];
  Beneficios?: string[];
  Modelo?: string[];
  'Tipo de producto'?: string[];
  Origen?: string[];
  'Otras características'?: string[];
  Recomendaciones?: string[];
  'Observaciones y recomendaciones'?: string[];
  Filtros?: string[];
  Tamaño?: string[];
  RutProveedor?: string[];
  Configuraciones?: string[];
  'Color Bucket'?: string[];
  'Filtros Bucket'?: string[];
  'Garantía Proveedor'?: string[];
  'Garantía Mínima Legal'?: string[];
  'Garantía y Durabilidad'?: string[];
  allSpecifications?: string[];
  allSpecificationsGroups?: string[];
  description: string;
  items: ProductItems[];
};
