import { useBookingStore } from '@/store/bookingStore'
import './Home.css'
import { ArrowRight, Music, Clock, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const services = useBookingStore((state) => state.services)

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Professional Audio Engineering Services</h1>
            <p>Book your session with expert audio engineers. Recording, mixing, mastering, and more.</p>
            <Link to="/booking" className="btn btn-primary">
              Book Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Music size={32} />
              <h3>Professional Quality</h3>
              <p>State-of-the-art equipment and experienced engineers</p>
            </div>
            <div className="feature-card">
              <Clock size={32} />
              <h3>Flexible Scheduling</h3>
              <p>Book sessions at times that work for you</p>
            </div>
            <div className="feature-card">
              <Award size={32} />
              <h3>Award Winning</h3>
              <p>Proven track record with countless successful projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <h3>{service.name}</h3>
                <p className="service-category">{service.category}</p>
                <p>{service.description}</p>
                <div className="service-meta">
                  <span className="duration">
                    <Clock size={16} /> {service.duration} mins
                  </span>
                  <span className="price">${service.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Book your audio engineering session today</p>
          <Link to="/booking" className="btn btn-primary">
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  )
}
