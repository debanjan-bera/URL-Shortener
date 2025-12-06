import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
            <img src="logo.png" alt="" className="h-8 aspect-square" />
            
              <span className="font-bold text-xl text-foreground">SHORTIE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The most powerful link management platform for modern businesses.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">MENU</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-muted-foreground hover:text-primary transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resource" className="text-muted-foreground hover:text-primary transition-colors">
                  Resource
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  The Community
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shortener" className="text-muted-foreground hover:text-primary transition-colors">
                  Link Shortener
                </Link>
              </li>
              <li>
                <Link to="/qr" className="text-muted-foreground hover:text-primary transition-colors">
                  QR Codes
                </Link>
              </li>
              <li>
                <Link to="/biolink" className="text-muted-foreground hover:text-primary transition-colors">
                  Bio Links
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">SUBSCRIBE TO NEWSLETTER</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="youremail@email.com"
                className="lex-1 px-3 py-2 text-sm rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary text-sm py-2 px-4">
                Subscribe →
              </button>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="font-semibold text-sm">CALL US</h4>
              <p className="text-muted-foreground">+62 123 4567 890</p>
              <h4 className="font-semibold text-sm mt-4">EMAIL US</h4>
              <p className="text-muted-foreground">help@shortie.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © Copyright 2024, All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

