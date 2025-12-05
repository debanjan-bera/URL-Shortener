import { motion } from "framer-motion";

const MarqueeSection = () => {
  const items = ["SHORTLINK","MICROSITE","CUSTOM LINK","MANAGE","SHORTLINK","MICROSITE","CUSTOM LINK","MANAGE",];

  return (
    <div className="relative overflow-hidden bg-primary py-5">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-2xl font-bold text-primary-foreground mx-7">{item}</span>
            <span className="text-2xl text-primary-foreground/50 mx-8">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
