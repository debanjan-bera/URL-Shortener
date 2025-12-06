import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight, IndianRupee } from "lucide-react";
import CustomButton from '../components/ui/CustomButton';
import { Footer } from '../components/landing/Footer';
import { NavaBar } from '../components/landing/NavBar';

export default function Pricing() {
      const [billingPeriod, setBillingPeriod] = useState("yearly");

  const plans = [
    {
      name: "Free",
      description: "Try us out for a quick project or two",
      price: { monthly: 0, yearly: 0 },
      billingNote: "Upgrade any time",
      features: [
        { text: "1 active project", icon: "📁" },
        { text: "3 MB upload limit", icon: "☁️" },
        { text: "5,000 visitors /mo", icon: "📊" },
      ],
      additionalFeatures: [],
      buttonText: "Get started",
      popular: false,
      color: "border-border",
      buttonClass: "bg-foreground text-background hover:bg-foreground/90",
    },
   
    {
      name: "Solo",
      description: "Great for individuals and small projects",
      price: { monthly: 18, yearly: 13 },
      yearlyPrice: 156,
      discount: "27% off",
      billingNote: "Billed at 156 /yr",
      features: [
        { text: "5 active projects", icon: "📁" },
        { text: "75 MB upload limit", icon: "☁️" },
        { text: "100,000 visitors /mo", icon: "📊" },
      ],
      additionalFeatures: ["Everything in Tiny Plan", "Custom domains", "Edit mode", "Password protection"],
      buttonText: "Get started",
      popular: true,
      color: "border-purple-500",
      buttonClass: "bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90",
    },
    {
      name: "Pro",
      description: "For freelancers, agencies & companies",
      price: { monthly: 42, yearly: 31 },
      yearlyPrice: 372,
      discount: "18% off",
      billingNote: "Billed at 372 /yr",
      features: [
        { text: "Unlimited active projects", icon: "📁" },
        { text: "10 GB upload limit", icon: "☁️" },
        { text: "500,000 visitors /mo", icon: "📊" },
      ],
      additionalFeatures: ["Everything in Solo Plan", "Capture emails", "Add more team members"],
      buttonText: "Get started",
      popular: false,
      color: "border-yellow-500",
      buttonClass: "bg-yellow-500 hover:bg-yellow-600 text-foreground",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">

      <NavaBar/>

      <main className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Upgrade for more</h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Upgrade to link your custom domain, track your visits, edit your content & much more.
            </p>

            <div className="inline-flex items-center gap-3 bg-muted/50 p-1 rounded-full">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-6 sm:p-8 rounded-lg border bg-card hover:shadow-xl transition-all ${
                  plan.popular ? `border-2 ${plan.color} shadow-lg` : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-500 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-2 flex-wrap">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center gap-1">
                      <IndianRupee />{billingPeriod === "yearly" ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-sm sm:text-base text-muted-foreground">/mo</span>
                    {plan.discount && billingPeriod === "yearly" && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {plan.discount}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-6">{plan.billingNote}</p>

                  <CustomButton className={`w-full ${plan.buttonClass}`}>
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CustomButton>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Info className="w-4 h-4" />
                    <span>7-day money-back guarantee</span>
                  </div>

                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-lg">{feature.icon}</span>
                      <span className="text-sm">{feature.text}</span>
                      <Info className="w-4 h-4 text-muted-foreground ml-auto" />
                    </div>
                  ))}
                </div>

                {plan.additionalFeatures.length > 0 && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-semibold mb-4">Additional Features:</p>
                    <div className="space-y-3">
                      {plan.additionalFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="w-full mt-6 text-sm text-primary hover:underline flex items-center justify-center gap-1">
                  Compare plans
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground">
              All plans include SSL encryption, 99.9% uptime guarantee, and 24/7 support
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )

}




// export default Pricing;
