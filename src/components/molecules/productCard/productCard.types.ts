import { CartItemModel } from "@/store/cart/cart.type";

export type ProductCardProps = {
    product: CartItemModel;
    cart: CartItemModel[];
    onAddToCart: (product: CartItemModel) => void;
    onDeleteFromCart: (product: CartItemModel) => void;
}