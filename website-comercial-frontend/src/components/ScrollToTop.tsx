import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

// rafce: reactArrowFunctionComponentExport
// Nota: Este componente se encarga de realizar un scroll automático hacia la parte superior de la página cada vez que la ubicación (pathname) de la ruta cambia en una aplicación web construida con React y React Router
