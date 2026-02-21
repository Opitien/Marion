import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { reviews } from '@/data/products';
import { SectionLabel } from './SectionLabel';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/reviews/asset_1.jpg)' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <SectionLabel light className="block mb-6">
              (Reviews)
            </SectionLabel>
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8">
              "{currentReview.quote}"
            </blockquote>

            <div className="flex items-center gap-3">
              <span className="text-white font-medium">
                {currentReview.author}
              </span>
              {currentReview.isVerified && (
                <span className="flex items-center gap-1 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Verified Buyer
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-12 flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-0.5 transition-all duration-300
                ${index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/40'}
              `}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
