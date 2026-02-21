import { motion } from 'framer-motion';
import { socialImages } from '@/data/products';
import { SectionLabel } from './SectionLabel';
import { SectionTitle } from './SectionTitle';

export function SocialGrid() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      {/* Header */}
      <motion.div 
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel className="block mb-4">(Socials)</SectionLabel>
        <SectionTitle>
          Follow us on social media<br className="hidden sm:block" />
          <span className="text-marion-text-secondary">@marion</span> for updates
        </SectionTitle>
      </motion.div>

      {/* Image Grid - Horizontal Scroll on Mobile */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-12 scrollbar-hide">
        {socialImages.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-48 sm:w-64 lg:w-80 aspect-square overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image}
              alt={`Social media post ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
