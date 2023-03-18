import { motion } from "framer-motion";
function UpdateProduct() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
            <h1>UpdateProduct Page</h1>
        </motion.div>
    )
}

export default UpdateProduct