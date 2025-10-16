import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  28 Willow Lane<br />
                  Midtown District, New York, NY 10017
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+12125550921" className="text-sm text-foreground/70 hover:text-primary transition-smooth">
                  (212) 555-0921
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@luxetouch.com" className="text-sm text-foreground/70 hover:text-primary transition-smooth">
                  contact@luxetouch.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground/70">
                  <p>Monday – Saturday: 9:00 AM – 7:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-hover"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-hover"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://wa.me/12125550921"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-hover"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Luxe Touch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
