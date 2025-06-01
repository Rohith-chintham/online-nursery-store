
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-50 to-earth-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-forest-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-earth-300 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free delivery on orders over $50
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bring Nature{" "}
            <span className="text-gradient">Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our carefully curated collection of indoor and outdoor plants. 
            Transform your space into a green sanctuary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3">
              Shop Plants
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-forest-600 text-forest-600 hover:bg-forest-50 px-8 py-3">
              Plant Care Guide
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-forest-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-600">500+</div>
              <div className="text-sm text-muted-foreground">Plant Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-600">50k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-600">99%</div>
              <div className="text-sm text-muted-foreground">Plant Survival Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
