// // // app/products/page.tsx (or wherever your page is)
// // import React from "react";
// // import { stripe } from "@/lib/stripe";
// // import { ProductList } from "@/components/ui/product-list";

// // export default async function ProductsPage() {
// //   // const products = await stripe.products.list({
// //   //   expand: ["data.default_price"],
// //   // });

// //   return (
// //     <div className="pb-8">
// //       <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
// //         All Products
// //       </h1>
// //       {/* <ProductList products={products.data} /> */}
// //     </div>
// //   );
// // }
// // app/products/page.tsx
// import React from "react";

// export default function ProductsPage() {
//   const products = [
//     { id: 1, name: "Boxing Gloves", price: "$40" },
//     { id: 2, name: "Training Shorts", price: "$25" },
//     { id: 3, name: "Protein Powder", price: "$60" },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
//       <ul className="space-y-4">
//         {products.map((product) => (
//           <li
//             key={product.id}
//             className="border p-4 rounded-xl shadow-sm bg-white"
//           >
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { ProductList } from "@/components/ui/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        All Products
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
