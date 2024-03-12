import ProductsGrid from "@/components/products/ProductsGrid";

const Products = () => {
  return (
    <div className=" bg-primary-light dark:bg-secondary-dark mt-28">
      <ProductsGrid page="products" />
    </div>
  );
};

export default Products;
