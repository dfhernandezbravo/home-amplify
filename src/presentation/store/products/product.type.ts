export interface PaymentSystemsEntity {
  id: number;
  name: string;
  groupName: string;
  validator?: null;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description?: null;
  requiresAuthentication: boolean;
  dueDate: string;
  availablePayments?: null;
}

export interface ClusterHighlights {
  [x: number]: string;
}

export interface ProductClusters {
  [x: number]: string;
}

export interface SearchableClusters {
  [x: number]: string;
}

export interface ReferenceIdEntity {
  Key: string;
  Value: string;
}

export interface ImagesEntity {
  imageId: string;
  imageLabel?: string;
  imageTag: string;
  imageUrl: string;
  imageText?: string;
  imageLastModified: string;
}

export interface DeliverySlaSamplesEntity {
  DeliverySlaPerTypes?: null[];
  Region?: null;
}

export interface InstallmentsEntity {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  PaymentSystemGroupName: string;
  Name: string;
}

export interface DiscountHighLightEntity {
  '<Name>k__BackingField': string;
}

export interface SellerMerchantInstallmentsEntity {
  id: string;
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
}

export interface DeliverySlaSamplesPerRegion {
  0: DeliverySlaSamplesEntity;
}

export interface InstallmentsEntity1 {
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  sellerMerchantInstallments?: SellerMerchantInstallmentsEntity[];
}

export interface InstallmentOptionsEntity {
  paymentSystem: string;
  bin?: null;
  paymentName: string;
  paymentGroupName: string;
  value: number;
  installments?: InstallmentsEntity1[];
}

export interface PaymentOptions {
  installmentOptions?: InstallmentOptionsEntity[];
  paymentSystems?: PaymentSystemsEntity[];
  payments?: null[];
  giftCards?: null[];
  giftCardMessages?: null[];
  availableAccounts?: null[];
  availableTokens?: null[];
}

export interface CommertialOffer {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments?: InstallmentsEntity[];
  DiscountHighLight?: DiscountHighLightEntity[];
  GiftSkuIds?: unknown[];
  Teasers?: unknown[];
  PromotionTeasers?: unknown[];
  BuyTogether?: unknown[];
  ItemMetadataAttachment?: unknown[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: string;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples?: DeliverySlaSamplesEntity[];
  GetInfoErrorMessage?: null;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
}

export interface SellersEntity {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
}

export interface ItemsEntity {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  referenceId?: ReferenceIdEntity[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType: string;
  isKit: boolean;
  images?: ImagesEntity[];
  sellers?: SellersEntity[];
  Videos?: unknown[];
  estimatedDateArrival?: null;
}

export type Product = {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  brandImageUrl?: null;
  linkText: string;
  productReference: string;
  productReferenceCode: string;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: string;
  clusterHighlights: ClusterHighlights;
  productClusters: ProductClusters;
  searchableClusters: SearchableClusters;
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
  items?: ItemsEntity[];
};
