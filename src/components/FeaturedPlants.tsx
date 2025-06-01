
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1509937528-d47be2a95e09?w=400",
    category: "Indoor",
    difficulty: "Easy",
    sale: true
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 25,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1595419785077-ad49ba2deb20?w=400",
    category: "Indoor",
    difficulty: "Very Easy",
    sale: false
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 75,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400",
    category: "Indoor",
    difficulty: "Medium",
    sale: false
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 35,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1610984833763-57f21f677e78?w=400",
    category: "Indoor",
    difficulty: "Easy",
    sale: false
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 40,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
    category: "Indoor",
    difficulty: "Easy",
    sale: false
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 30,
    originalPrice: 40,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?w=400",
    category: "Indoor",
    difficulty: "Very Easy",
    sale: true
  }
];

const FeaturedPlants = () => {
  const [likedPlants, setLikedPlants] = useState(new Set());

  const toggleLike = (plantId: number) => {
    const newLiked = new Set(likedPlants);
    if (newLiked.has(plantId)) {
      newLiked.delete(plantId);
    } else {
      newLiked.add(plantId);
    }
    setLikedPlants(newLiked);
  };

  return (
    <section className="py-16 bg-forest-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Plants</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked favorites that are perfect for any plant parent
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <Card key={plant.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {plant.sale && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">
                      Sale
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-forest-700">
                    {plant.difficulty}
                  </Badge>
                </div>

                {/* Like button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                  onClick={() => toggleLike(plant.id)}
                >
                  <Heart 
                    className={`h-5 w-5 ${likedPlants.has(plant.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </Button>
              </CardHeader>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1">{plant.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{plant.rating}</span>
                      <span>({plant.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-forest-600">${plant.price}</span>
                    {plant.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">${plant.originalPrice}</span>
                    )}
                  </div>
                  
                  <Button size="sm" className="bg-forest-600 hover:bg-forest-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-forest-600 text-forest-600 hover:bg-forest-50">
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
