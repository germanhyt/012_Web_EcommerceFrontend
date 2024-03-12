import { ReactNode, createContext, useState } from "react";

interface CartProduct {
  id: number;
  quantity: number;
  price: number;
}

interface CartProductsContextType {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct, quantity: number) => void;
  deleteProductToCart: (product: CartProduct) => void;
  calculateTotal: () => number;
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  reloadStore: (id: number) => void;
}

interface IProps {
  children?: ReactNode;
}

export const CartContext = createContext<CartProductsContextType>({
  cartProducts: [],
  addProductToCart: () => {},
  deleteProductToCart: () => {},
  calculateTotal: () => 0,
  setCartProducts: () => {},
  reloadStore: () => {},
});

const CartProvider = (props: IProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const reloadStore = (id: number) => {
    localStorage.setItem("products", JSON.stringify(id));
  };

  const addProductToCart = (product: CartProduct, quantity: number) => {
    const existente: CartProduct | undefined = cartProducts.find(
      (cp: CartProduct) => cp.id === product.id
    );

    if (existente !== null) {
      product.quantity = product.quantity + quantity;
      setCartProducts((cp) => [...cp, product]);
      localStorage.setItem(
        "products",
        JSON.stringify([...cartProducts, product])
      );
    }
  };

  const deleteProductToCart = (product: CartProduct) => {
    setCartProducts(
      cartProducts.filter((cp: CartProduct) => {
        product.quantity = 0;
        localStorage.removeItem("products");
        return cp.id !== product.id;
      })
    );
  };

  const calculateTotal = () => {
    let total = 0;
    cartProducts.map((cp: CartProduct) => {
      total = cp.price * cp.quantity + total;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        deleteProductToCart,
        calculateTotal,
        setCartProducts,
        reloadStore,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
