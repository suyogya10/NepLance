import React from "react";
import Cara from "./Cara";
import HomeCards from "./HomeCards";
import { motion } from "framer-motion";

function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Cara />
        <HomeCards />
      </div>
    </motion.div>
  );
}

export default Home;
