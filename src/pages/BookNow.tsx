
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, CalendarCheck, ExternalLink, Clock, Scissors, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookingForm } from '../components/booking/BookingForm';

const BookNow = () => {
  const { toast } = useToast();
  const [redirecting, setRedirecting] = useState(false);

  const handleExternalBooking = () => {
    setRedirecting(true);
    toast({
      title: "Redirecting to booking system",
      description: "You'll be redirected to our scheduling system in a moment.",
    });
    
    // Short delay before redirecting to external booking site
    setTimeout(() => {
      window.open('tel:+17732524444', '_blank');
      setRedirecting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-salon-dark mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-salon-dark/80 max-w-2xl mx-auto">
              Schedule your next skin care appointment with Haviland Alivia Esthetics and experience beauty services at their finest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-xl font-serif font-semibold text-salon-dark mb-4 flex items-center">
                  <Calendar className="mr-2 text-salon-pink" size={20} />
                  Booking Information
                </h2>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <Phone size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Phone Booking:</strong> For the best service, we recommend booking by phone at (773) 252-4444.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <Clock size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Business Hours:</strong> Mon-Fri: 9am - 7pm, Sat: 9am - 5pm, Sun: Closed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <Scissors size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Services Available:</strong> Advanced skin care, permanent jewelry, acne treatments
                    </span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button 
                    onClick={handleExternalBooking}
                    disabled={redirecting}
                    className="bg-salon-pink hover:bg-salon-pink/90 text-white py-6 px-6 rounded-md w-full flex items-center justify-center text-lg"
                  >
                    {redirecting ? 'Redirecting...' : 'Call To Book Now'}
                    <Phone className="ml-2" size={18} />
                  </Button>
                  <p className="text-sm text-salon-dark/60 mt-2 text-center">
                    Call (773) 252-4444 for immediate appointments
                  </p>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-serif font-semibold text-salon-dark mb-4">
                Booking FAQ
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-salon-dark">Do I need to make an appointment?</h3>
                  <p className="text-salon-dark/80 mt-1">
                    While we do accept walk-ins when possible, we recommend booking an appointment to ensure you get your preferred time slot.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-salon-dark">How far in advance should I book?</h3>
                  <p className="text-salon-dark/80 mt-1">
                    We recommend booking at least 1-2 days in advance for regular services, and a week ahead for special occasions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-salon-dark">What if I need to cancel my appointment?</h3>
                  <p className="text-salon-dark/80 mt-1">
                    Please give us at least 24 hours notice if you need to cancel or reschedule your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookNow;
