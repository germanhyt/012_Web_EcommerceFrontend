import "@/assets/styles/app/css/styles.css";
import "bootstrap";
import "@/assets/styles/app/scss/app.scss";

import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import { PageFooter, PageHeader } from "./components/shared";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/views/Home"));

function App() {
  return (
    <AnimatePresence>
      <div className="m-0 p-0 border-none box-border transition duration-300 bg-secondary-light dark:bg-primary-dark">
        <Router>
          <PageHeader />
          <ScrollToTop />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
          <PageFooter />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
