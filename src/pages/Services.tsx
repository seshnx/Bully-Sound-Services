import { useBookingStore } from '@/store/bookingStore'
import './Services.css'

export default function Services() {
  const services = useBookingStore((state) => state.services)

  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <p className="services-intro">
          Explore our full range of professional audio engineering services
        </p>

        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-detail-card">
              <div className="service-header">
                <div>
                  <h2>{service.name}</h2>
                  <span className="badge">{service.category}</span>
                </div>
                <div className="service-price-badge">
                  <span className="price">${service.price}</span>
                  <span className="duration">{service.duration} min</span>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to book?</h2>
          <a href="/booking" className="btn btn-primary">
            Book a Service
          </a>
        </div>
      </div>
    </div>
  )
}
