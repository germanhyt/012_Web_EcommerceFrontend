import { ProductsContext } from "@/core/hooks";
import ProductsContextType from "@/layouts/domain/ProductsContextType";
import { useContext } from "react";

const ProductInfo = () => {
  const { products, idProduct } =
    useContext<ProductsContextType>(ProductsContext);

  return products
    .filter((project) => project.id === idProduct)
    .map((p) => (
      <div key={p.id} className="block sm:flex gap-0 sm:gap-10 mt-12">
        <div className="w-full sm:w-1/3 text-left">
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {p.ProductsInfo.ProductHeading}
            </p>
            <ul className="leading-loose">
              {p.ProductsInfo.ProductDetails.map((info) => {
                return (
                  <li
                    key={info.id}
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://portfolio-web-ghyt.netlify.app/"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
		
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {p.ProductsInfo.DescriptionDetailsHeading}
          </p>
          {p.ProductsInfo.DescriptionDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
      </div>
    ));
};

export default ProductInfo;
