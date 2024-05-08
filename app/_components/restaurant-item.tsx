import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-2">
      {/* imagem */}
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          className="rounded-lg object-cover"
          alt={restaurant.name}
        />

        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2 py-1">
          <StarIcon className="fill-yellow-500 text-yellow-500" size={12} />
          <span className="text-xs font-semibold">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-gray-700"
        >
          <HeartIcon size={16} fill="white" />
        </Button>
      </div>
      {/* texto */}
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        {/* informaçoes */}
        <div className="flex gap-4 pt-1">
          {/* custo de entrega */}
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={16} />
            <span className="text-base text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          {/* tempo de entrega */}
          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={16} />
            <span className="text-base text-muted-foreground">
              {Number(restaurant.deliveryTimeMinutes)} Min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantItem;
