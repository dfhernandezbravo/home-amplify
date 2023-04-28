export type AddCartButtonProps = {
    enable: boolean;
    remove: () => void;
    addNew: () => void;
    addExisting: () => void;
    quantity: number;
}