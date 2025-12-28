// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../components/features/auth/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state)=> state.auth.user)
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      userName:"",
      password:""
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  
  const onsubmit = (data)=>{
    dispatch(login(data))

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
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
            Back to home {loginData?.userName}
          </Link>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="logo.png" alt="" className="h-10 aspect-square" />
            </div>
            <span className="font-bold text-2xl text-foreground">SHORTIE</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground mb-8">
            Enter your credentials to access your account
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("userName", { required: true })}
                  //   value={formData.email}
                  //   onChange={(e) =>
                  //     setFormData({ ...formData, email: e.target.value })
                  //   }
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
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  //   value={formData.password}
                  //   onChange={(e) =>
                  //     setFormData({ ...formData, password: e.target.value })
                  //   }
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <p className="text-center text-muted-foreground mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-32 h-32 bg-primary-foreground/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
            <img src="logo.png" alt="" className="h-14 aspect-square" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Shorten. Share. Succeed.
          </h2>
          <p className="text-primary-foreground/80 max-w-sm">
            Join thousands of businesses using SHORTIE to manage their links and
            grow their audience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
