
import { ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="content-section fade-in-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-salon-pink font-medium mb-2">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Advanced Medical Aesthetics
          </h2>
          <p className="text-salon-dark/80 mb-6">
            At Nourish Medical Spa, we provide exceptional medical aesthetic services tailored to your unique needs.
            As a PA-C and Natural Enhancement Specialist, we're dedicated to helping you achieve
            your beauty and wellness goals with personalized treatments and expert advice.
          </p>
          <p className="text-salon-dark/80 mb-8">
            We offer a comprehensive range of services including Dermal Fillers, Cosmetic & Therapeutic Botox,
            Medical Weight Loss programs, and Testosterone Replacement therapy. Our clinic provides a relaxing
            environment where you can enhance your natural beauty and improve your overall wellness.
          </p>
          <Link to="/about" className="inline-flex items-center text-salon-pink font-medium">
            Learn More About Us <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Medical spa treatment"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 p-4 glass-card shadow-lg max-w-xs">
            <div className="flex items-center">
              <div className="bg-salon-pink rounded-full p-2 mr-3">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">Medical Professional</p>
                <p className="text-xs text-salon-dark/70">PA-C Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
