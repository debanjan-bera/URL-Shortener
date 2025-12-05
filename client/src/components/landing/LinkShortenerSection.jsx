import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const LinkShortener = () => {
  return (
    <section className="bg-dark-blue py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            SHORTEN YOUR LINK NOW
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="url"
              placeholder="Enter the link here..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="btn-primary whitespace-nowrap px-8">
            Shorten Link
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default LinkShortener;
