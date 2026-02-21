import { motion } from 'framer-motion';
import { ShopButton } from './ShopButton';
import { SectionLabel } from './SectionLabel';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/asset_1.jpg)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionLabel light className="block mb-4">
              (Featured Collection)
            </SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
              Timeless Essentials<br />
              for the Season
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ShopButton variant="light" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
