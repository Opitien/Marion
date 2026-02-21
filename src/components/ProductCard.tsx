import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Expand } from 'lucide-react';
import type { Product } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-marion-bg-alt overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          {product.isNew && (
            <Badge className="bg-marion-primary text-white text-xs px-2 py-1 rounded-none">
              New
            </Badge>
          )}
          {product.isSale && (
            <Badge className="bg-marion-sale text-white text-xs px-2 py-1 rounded-none">
              Sale
            </Badge>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div 
          className={`
            absolute inset-0 bg-black/40 flex items-end justify-between p-4
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <button className="flex items-center gap-2 text-white text-sm font-medium">
            Select Options
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
            <Expand className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-base font-medium text-marion-primary">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-marion-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-marion-text-secondary line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
