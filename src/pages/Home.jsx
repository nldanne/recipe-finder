import Vegetarian from "../components/Vegetarian.jsx";
import Popular from "../components/Popular.jsx";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Vegetarian />
      <Popular />
    </motion.div>
  );
}

export default Home;
