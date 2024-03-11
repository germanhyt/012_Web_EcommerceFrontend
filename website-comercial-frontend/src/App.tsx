import "@/assets/styles/app/css/styles.css";
import "bootstrap";
import "@/assets/styles/app/scss/app.scss";

import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import { PageFooter, PageHeader } from "./components/shared";
import { Suspense, lazy } from "react";
import { productsData } from "./assets/data";
import ButtonWhatsapp from "./components/reusable/ButtonWhatsapp";

const Home = lazy(() => import("@/layouts/views/Home"));
const Products = lazy(() => import("@/layouts/views/Products"));
const Product = lazy(() => import("@/layouts/views/Product"));
const AboutUs = lazy(() => import("@/layouts/views/AboutUs"));
const Contact = lazy(()=>import("@/layouts/views/Contact"))

function App() {
  return (
    <AnimatePresence>
      <div className="w-[100vw] m-0 p-0 border-none box-border transition duration-300 bg-secondary-light dark:bg-primary-dark">
        <ButtonWhatsapp />
        <Router>
          <PageHeader />
          <ScrollToTop />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              {productsData.map((prod) => (
                <Route
                  key={prod.id}
                  path={`products/single-product/${prod.id}`}
                  element={<Product idProduct={prod.id} />}
                />
              ))}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Suspense>
          <PageFooter />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
