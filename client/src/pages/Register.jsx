import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const features = [
    "Unlimited short links",
    "Custom branded domains",
    "Advanced analytics",
    "QR code generation",
  ];
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    navigate("/dashboard");
    console.log(data)
  }


  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Decoration */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">
              <img src="logo.png" alt="" className="h-14 aspect-square" />
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Start your journey with SHORTIE
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Create powerful short links and track your audience engagement in
            real-time.
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">
            Create an account
          </h1>
          <p className="text-muted-foreground mb-8">
            Get started with your free account today
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  // name="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  // name="password"
                  {...register("password")}
                  placeholder="Create a password"
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Must be at least 8 characters
              </p>
            </div>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-border text-primary focus:ring-primary"
                required
              />
              <span className="text-sm text-muted-foreground">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <p className="text-center text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
