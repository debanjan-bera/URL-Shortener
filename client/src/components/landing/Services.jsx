import { motion } from "framer-motion";
import { Users, Link, Layers, Server, ShieldCheck } from "lucide-react";

const Services = () => {
  const stats = [
    {
      icon: Users,
      value: "100k",
      label: "Active User",
    },
    {
      icon: Link,
      value: "50k",
      label: "Link Created Monthly",
    },
    {
      icon: Layers,
      value: "500+",
      label: "Integration",
    },
    {
      icon: Server,
      value: "99%",
      label: "Uptime Server",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            WHY USE OUR SERVICE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Great solutions can be built using you a great way of experience to believe in
            you and deliver easy, great data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SSL Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="shrink-0">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              SSL and redirection url with no worries
            </h3>
            <p className="text-muted-foreground">
              Your links are secured with enterprise-grade SSL encryption. Rest assured
              that all your short links are safe and protected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
