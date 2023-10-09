interface Props {
  hasActionButton: boolean;
  slidesPerView: number;
  countItems: number;
}

const showArrowButtons = ({
  hasActionButton,
  slidesPerView,
  countItems,
}: Props) => hasActionButton && slidesPerView < countItems + 1;

export default showArrowButtons;
