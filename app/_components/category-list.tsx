import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  // pegar as categorias do banco
  // renderizar um icone para cada categoria
  const categories = await db.category.findMany({});
  return (
    <div className="flex gap-2 overflow-x-scroll px-5 py-1 [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
