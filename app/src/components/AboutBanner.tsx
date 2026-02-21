import { motion } from 'framer-motion';
import { ShopButton } from './ShopButton';
import { SectionLabel } from './SectionLabel';

export function AboutBanner() {
  return (
    <section id="about" className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about-silhouette.jpg)' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel light className="block mb-4">
              (About Marion)
            </SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight">
              Pieces beyond seasons, created<br className="hidden sm:block" />
              to adapt and remain timeless.
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShopButton variant="light">Our Story</ShopButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
