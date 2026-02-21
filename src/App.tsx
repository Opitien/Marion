import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { CollectionSplit } from '@/components/CollectionSplit';
import { AboutBanner } from '@/components/AboutBanner';
import { ReviewsSection } from '@/components/ReviewsSection';
import { SocialGrid } from '@/components/SocialGrid';
import { Footer } from '@/components/Footer';
import { bestsellers, newArrivals, saleProducts } from '@/data/products';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ProductGrid 
          products={bestsellers}
          title="Our Most Popular Pieces This Season"
          label="(Bestsellers)"
        />
        
        <CollectionSplit />
        
        <ProductGrid 
          products={newArrivals}
          title="This Season's Must-Haves"
          label="(New Arrivals)"
        />
        
        <AboutBanner />
        
        <ProductGrid 
          products={saleProducts}
          title="Top Picks, Now on Discount"
          label="(Discounts)"
        />
        
        <ReviewsSection />
        
        <SocialGrid />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
