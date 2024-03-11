import ProductsGrid from "@/components/products/ProductsGrid";
import { ProductsProvider } from "@/core/hooks";

const Products = () => {
  return (
    <div className=" bg-primary-light dark:bg-secondary-dark mt-28">
      <ProductsProvider>
        <ProductsGrid page="products" />
      </ProductsProvider>
    </div>
  );
};

export default Products;
