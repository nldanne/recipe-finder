import Home from "./Home.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine.jsx";
import Searched from "./Searched.jsx";
import Recipe from "./Recipe.jsx";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
