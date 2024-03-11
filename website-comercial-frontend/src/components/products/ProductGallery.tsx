import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/core/hooks";
import ProductsContextType from "@/layouts/domain/ProductsContextType";
import { Slide } from "react-slideshow-image";

const ProductGallery = () => {
  // Hooks
  const { products, idProduct } =
    useContext<ProductsContextType>(ProductsContext);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Methods
  const properties = {
    prevArrow: (
      <button className="w-5 border-0 bg-black text-white">
        <i className="fa-solid fa-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="w-5 border-0 bg-black text-white">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    ),
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return products
    .filter((product) => product.id === idProduct)
    .map((p) => (
      <div
        key={p.id}
        // className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 py-6"
        className="pt-12 pb-2 sm:mb-0"
      >
        <Slide {...properties} slidesToShow={slidesToShow}>
          {p.ProductsImages.map((pp) => {
            return (
              <div key={pp.id} className="mx-2">
                <span>{pp.title}</span>
                <img
                  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                  src={pp.img}
                  alt={pp.title}
                  key={pp.id}
                />
              </div>
            );
          })}
        </Slide>
      </div>
    ));
};

export default ProductGallery;
