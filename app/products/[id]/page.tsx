import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import DiscountBadge from "@/app/_components/discount-badge";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* imagem */}
      <ProductImage product={product} />
      {/* titulo e preço */}
      <div className="p-5">
        {/* restaurante */}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-7 w-7">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>

        {/* nome do produto */}
        <h1 className="mb-3 mt-1 text-xl font-semibold">{product.name}</h1>

        {/* preço produto e qtnd */}
        <div className="flex justify-between">
          {/* preço com desconto*/}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {formatCurrency(calculateProductTotalPrice(product))}
              </h2>
              {product.discountPercentage > 0 && (
                <DiscountBadge product={product} />
              )}
            </div>
            {/* preço original */}
            <p className="text-sm text-muted-foreground line-through">
              De: {formatCurrency(Number(product.price))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
