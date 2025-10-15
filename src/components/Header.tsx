import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Team",
    path: "/team"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-script text-3xl md:text-4xl text-primary">Luxe Touch</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-smooth hover:text-primary ${isActive(item.path) ? "text-primary" : "text-foreground/70"}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="booking" size="lg">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className={`block py-3 text-sm font-medium transition-smooth hover:text-primary ${isActive(item.path) ? "text-primary" : "text-foreground/70"}`}>
                {item.name}
              </Link>)}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="booking" size="lg" className="w-full mt-4">
                Book Appointment
              </Button>
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;