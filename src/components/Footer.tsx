
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-forest-400" />
              <span className="text-2xl font-bold">GreenHaven</span>
            </div>
            <p className="text-forest-200">
              Your trusted partner in bringing nature home. Quality plants, expert care advice, and exceptional service.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-forest-200 hover:text-white hover:bg-forest-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-forest-200 hover:text-white hover:bg-forest-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-forest-200 hover:text-white hover:bg-forest-800">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-forest-200">
              <li><a href="#" className="hover:text-white transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outdoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pots & Planters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Food</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-forest-200">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-forest-200">Get plant care tips and exclusive offers</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-forest-800 border-forest-700 text-white placeholder:text-forest-300"
              />
              <Button className="bg-forest-600 hover:bg-forest-500">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 text-sm text-forest-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@greenhaven.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Garden St, Green City, GC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-forest-200">
          <p>&copy; 2024 GreenHaven. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
