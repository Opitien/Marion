import { motion } from 'framer-motion';
import type { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { SectionLabel } from './SectionLabel';
import { SectionTitle } from './SectionTitle';

interface ProductGridProps {
  products: Product[];
  title: string;
  label: string;
}

export function ProductGrid({ products, title, label }: ProductGridProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel className="block mb-4">{label}</SectionLabel>
          <SectionTitle>{title}</SectionTitle>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
