export type ProductType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}

export type CartItemProps = {
    item: ProductType;
    handleAddToCart: (clickedItem: ProductType) => void;
}

export type CartProps = {
    cartItems: ProductType[];
    addToCart: (clickedItem: ProductType) => void;
    removeFromCart: (id: number) => void;
}

export type CartItemsProps = {
    item: ProductType
    addToCart: (clickedItem: ProductType) => void;
    removeFromCart: (id: number) => void;
}