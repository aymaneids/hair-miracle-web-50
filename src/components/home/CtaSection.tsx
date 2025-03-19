
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-24 fade-in-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Skin care treatment"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
          Ready for Your Skin Transformation?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Book your appointment today and experience the excellence of Haviland Alivia Esthetics.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/book-now"
            className="btn-primary"
          >
            <Calendar size={18} className="mr-2" />
            Book Appointment
          </Link>
          <Link to="/contact" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
            <MapPin size={18} className="mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
