import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, RotateCcw, Shield, Headphones } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Package, text: 'Free shipping from $149' },
  { icon: RotateCcw, text: 'Easy returns within 30 days' },
  { icon: Shield, text: 'Secure payments online' },
  { icon: Headphones, text: '24/7 customer support' },
];

const navigation = [
  { label: 'Index', href: '/' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Our Story', href: '#about' },
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const help = [
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-marion-primary text-white">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-5 h-5 text-white/70" />
                <span className="text-sm text-white/70">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Logo */}
          <div>
            <motion.h2 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              MARION
            </motion.h2>
            <p className="text-white/50 text-sm">
              © 2025 All Rights Reserved
            </p>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-white/50 text-sm mb-4">(Navigation)</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white/50 text-sm mb-4">(Legal)</h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-white/50 text-sm mb-4">(Help)</h3>
              <ul className="space-y-3">
                {help.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <p className="text-white mb-4">
              Subscribe to our newsletter for new arrivals and special offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-0 rounded-none text-white placeholder:text-white/50 focus-visible:ring-white/30"
              />
              <Button 
                type="submit"
                className="bg-white text-marion-primary hover:bg-white/90 rounded-none px-6"
              >
                Submit
              </Button>
            </form>
            <p className="text-white/50 text-xs mt-3">
              By subscribing to our newsletter, you agree to receive emails from us and accept our{' '}
              <a href="#" className="underline hover:text-white">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="mt-12 flex items-center gap-6">
          <span className="text-white/50 text-xs font-medium">VISA</span>
          <span className="text-white/50 text-xs font-medium">Mastercard</span>
          <span className="text-white/50 text-xs font-medium">PayPal</span>
          <span className="text-white/50 text-xs font-medium">G Pay</span>
          <span className="text-white/50 text-xs font-medium">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
}
