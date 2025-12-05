import { motion } from "framer-motion";

const CustomCard = ({
  children,
  className = "",
  animate = true,
  delay = 0,
}) => {
  const baseStyles =
    "rounded-lg border border-border bg-card text-card-foreground shadow-sm";

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default CustomCard;
