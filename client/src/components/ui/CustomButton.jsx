import { motion } from "framer-motion";
import { memo } from "react";
// import { motion } from "motion/react"
const CustomButton = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-border bg-transparent hover:bg-accent/10 text-foreground",
    ghost: "hover:bg-accent/10 text-foreground",
    green:"bg-green-500/70 text-green-950 hover:bg-green-500/80"
  };

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${baseStyles} ${variants[variant]} ${sizes[size]} `}
    >
      {children}
      
    </motion.button>
  );
};

export default memo(CustomButton);
