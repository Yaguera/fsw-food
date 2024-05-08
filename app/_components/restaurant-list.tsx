import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  // No futuro será selecionado restaurante com maior numero de pedidos
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="flex gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
