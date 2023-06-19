type LinkItem = {
  attributeNofollow?: boolean;
  attributeTitle?: string;
  url?: string;
};

export type CalugaItemProps = {
  image?: string;
  mobileImage?: string;
  description?: string;
  title?: string;
  link?: LinkItem;
  width?: string;
  loading?: string;
  analyticsProperties?: string;
  promotionName?: string;
  promotionId?: string;
  promotionPosition?: string;
};

export type CalugasProps = {
  items?: CalugaItemProps[];
};
