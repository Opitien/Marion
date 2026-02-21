import { useState } from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Our Story', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                  isScrolled ? 'text-marion-primary' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className={`p-2 transition-colors ${
                  isScrolled ? 'text-marion-primary' : 'text-white'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-marion-primary hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <a
            href="/"
            className={`text-lg font-bold tracking-wider transition-colors ${
              isScrolled ? 'text-marion-primary' : 'text-white'
            }`}
          >
            MARION
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-opacity hover:opacity-70 ${
                isScrolled ? 'text-marion-primary' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-opacity hover:opacity-70 ${
                isScrolled ? 'text-marion-primary' : 'text-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
