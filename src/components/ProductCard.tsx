import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
}

export default function ProductCard({
  image,
  name,
  price,
  oldPrice,
  discount,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${oldPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={20} />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
