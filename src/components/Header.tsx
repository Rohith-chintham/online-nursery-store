
import { ShoppingCart, Search, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Header = () => {
  const [cartItems, setCartItems] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-forest-600" />
          <span className="text-2xl font-bold text-gradient">GreenHaven</span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Indoor Plants
          </a>
          <a href="#" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Outdoor Plants
          </a>
          <a href="#" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Plant Care
          </a>
          <a href="#" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Pots & Planters
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {cartItems}
              </Badge>
            )}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
