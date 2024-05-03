import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  // pegar as categorias do banco
  // renderizar um icone para cada categoria
  const categories = await db.category.findMany({});
  return (
    <>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
};

export default CategoryList;
