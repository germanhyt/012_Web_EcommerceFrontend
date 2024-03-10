import ProductsGrid from "@/components/products/ProductsGrid";
import { BannerSlider } from "@/components/shared";
import { ProductsProvider } from "@/core/hooks";

const Home = () => {
  return (
    <>
      <div className=" ">
        {/* Carousel de Imagenes */}
        <BannerSlider />
        {/* Grilla de Productos */}
        <ProductsProvider>
          <ProductsGrid page={"Home"} />
        </ProductsProvider>
      </div>
    </>
  );
};

export default Home;
