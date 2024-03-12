import ProductGallery from "@/components/products/ProductGallery";
import ProductHeader from "@/components/products/ProductHeader";
import ProductInfo from "@/components/products/ProductInfo";
import { ProductsProvider } from "@/core/hooks";
import CartProvider from "@/core/hooks/CartContext";
import { motion } from "framer-motion";

interface IProps {
  idProduct: number;
}

const Product = ({ idProduct }: IProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.15,
      }}
      className="bg-primary-light dark:bg-secondary-dark mt-28"
    >
      <div className="container mx-auto py-8 sm:py-16">
        <ProductsProvider idProduct={idProduct}>
          <ProductHeader />
          <ProductGallery />
          <CartProvider>
            <ProductInfo />
          </CartProvider>
        </ProductsProvider>
      </div>
    </motion.section>
  );
};

export default Product;
