import { motion } from "framer-motion";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const BannerSlider = () => {
  const images = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710026484/Ecommerce-frontend/Frame_37_acvjho.svg",
      title_right: "",
      title_middle: "Bienvenido👋",
      show_title_middle: true,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948228/Imagenes_Portafolio/frutos-secos_vhd3fh.svg",
      title_right: "Frutos Secos Naturales",
      title_middle: "",
      show_title_middle: false,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948228/Imagenes_Portafolio/menestras_merg9w.svg",
      title_right: "Menestras Nacionales e Importados",
      title_middle: "",
      show_title_middle: false,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948229/Imagenes_Portafolio/embutidos_o438sw.svg",
      title_right: "Embutidos San Fernando",
      title_middle: "",
      show_title_middle: false,
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948227/Ecommerce-frontend/comida-animales_rmntla.svg",
      title_right: "Comida para Animales",
      title_middle: "",
      show_title_middle: false,
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948227/Ecommerce-frontend/harinas_cc8obz.svg",
      title_right: "Harinas Naturales",
      title_middle: "",
      show_title_middle: false,
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948227/Ecommerce-frontend/limpieza_ykkaij.svg",
      title_right: "Productos de Limpieza",
      title_middle: "",
      show_title_middle: false,
    },
  ];

  const buttonStyle = {
    width: "30px",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    ),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative "
    >
      <div className=" w-[100vw] mt-6 sm:mt-28">
        <Slide {...properties}>
          {images.map((e) => {
            return (
              <div key={e.id} className="bg-cover overflow-hidden relative">
                {e.show_title_middle ? (
                  <div className="absolute top-0 w-full h-full flex justify-center items-center">
                    <h2 className="z-50 text-white text-xs sm:text-[32px] text-center font-nunito font-bold">{e.title_middle}</h2>
                  </div>
                ) : (
                  <>
                    <div className="absolute top-0 right-0 h-full">
                      <div className="bg-red-600 w-[150px] sm:w-[400px] h-full px-5 bg-triangle flex items-center justify-center text-xs sm:text-lg">
                        <p className="mx-auto text-center text-white font-nunito font-bold">
                          {e.title_right}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <img className="w-full" src={`${e.img}`} alt="img" />
              </div>
            );
          })}
        </Slide>
      </div>
    </motion.section>
  );
};

export default BannerSlider;
