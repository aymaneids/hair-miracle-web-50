import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Medical spa treatment" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-white/80 text-sm font-medium px-3 py-1 border border-white/20 rounded-full mb-4 backdrop-blur-sm bg-white/10 animate-fade-in">
            Santé/beauté
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            NOURISH MEDICAL SPA
          </h1>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Link to="/book-now" className="btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;