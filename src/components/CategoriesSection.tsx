
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Trees, Droplets, Sun } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Indoor Plants",
    description: "Perfect for brightening up your living spaces",
    items: "120+ varieties",
    color: "bg-forest-100 text-forest-700",
    hoverColor: "hover:bg-forest-200"
  },
  {
    icon: Trees,
    title: "Outdoor Plants",
    description: "Transform your garden into a paradise",
    items: "200+ varieties",
    color: "bg-earth-100 text-earth-700",
    hoverColor: "hover:bg-earth-200"
  },
  {
    icon: Droplets,
    title: "Plant Care",
    description: "Everything you need to keep plants healthy",
    items: "50+ products",
    color: "bg-blue-100 text-blue-700",
    hoverColor: "hover:bg-blue-200"
  },
  {
    icon: Sun,
    title: "Succulents",
    description: "Low maintenance, high beauty plants",
    items: "80+ varieties",
    color: "bg-orange-100 text-orange-700",
    hoverColor: "hover:bg-orange-200"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect plants for your space and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 hover:border-forest-300 ${category.hoverColor}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-3">{category.description}</p>
                  <p className="text-sm font-medium text-forest-600 mb-4">{category.items}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-forest-600 group-hover:text-white transition-colors">
                    Browse
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
