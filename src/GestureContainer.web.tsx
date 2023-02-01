import { motion } from "framer-motion";

export function GestureContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
      style={{
        width: 200,
        height: 200,
        background: "lightblue",
        boxShadow: "0 4px 4px black",
      }}
    >
      {children}
    </motion.div>
  );
}
