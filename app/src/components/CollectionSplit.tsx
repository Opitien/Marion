import { motion } from 'framer-motion';
import { ShopButton } from './ShopButton';

const collections = [
  {
    id: 'men',
    title: "Men's Collection",
    image: '/images/collections/mens-collection.jpg',
    href: '#men',
  },
  {
    id: 'women',
    title: "Women's Collection",
    image: '/images/collections/womens-collection.jpg',
    href: '#women',
  },
];

export function CollectionSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {collections.map((collection, index) => (
        <motion.a
          key={collection.id}
          href={collection.href}
          className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${collection.image})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
                {collection.title}
              </h2>
              <ShopButton variant="dark" />
            </motion.div>
          </div>
        </motion.a>
      ))}
    </section>
  );
}
