// components/Carousel.tsx
"use client";

import Stripe from "stripe";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300 w-full max-w-xl mx-auto">
      {/* Product Image */}
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}

      {/* Product Info Overlay */}

      {/* Optional Product Description */}
      {currentProduct.description && (
        <p className="text-white text-sm mb-2">{currentProduct.description}</p>
      )}

      {/* Product Price */}
      {price?.unit_amount && (
        <p className="text-xl text-white mt-1">
          ${(price.unit_amount / 100).toFixed(2)}
        </p>
      )}
    </Card>
  );
};
