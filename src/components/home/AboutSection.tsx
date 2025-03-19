
import { ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="content-section fade-in-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-salon-pink font-medium mb-2">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Advanced Skin Care Expertise
          </h2>
          <p className="text-salon-dark/80 mb-6">
            At Haviland Alivia Esthetics, we provide exceptional skin care services tailored to your unique needs.
            As a Certified Advanced Esthetician and Certified Acne Specialist, we're dedicated to helping you achieve
            your skin care goals with personalized treatments and expert advice.
          </p>
          <p className="text-salon-dark/80 mb-8">
            We also offer LINKED Permanent Jewelry, providing beautiful, lasting pieces that celebrate your special moments.
            Our studio provides a relaxing environment where you can rejuvenate your skin and enhance your natural beauty.
          </p>
          <Link to="/about" className="inline-flex items-center text-salon-pink font-medium">
            Learn More About Us <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Skin care treatment"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 p-4 glass-card shadow-lg max-w-xs">
            <div className="flex items-center">
              <div className="bg-salon-pink rounded-full p-2 mr-3">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">Certified Specialist</p>
                <p className="text-xs text-salon-dark/70">Advanced Esthetician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
