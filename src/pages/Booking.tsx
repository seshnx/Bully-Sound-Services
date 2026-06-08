import { useState } from 'react'
import { useBookingStore } from '@/store/bookingStore'
import './Booking.css'

export default function Booking() {
  const { services, addBooking } = useBookingStore()
  const [formData, setFormData] = useState({
    serviceId: services[0]?.id || '',
    date: '',
    time: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const booking = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    }

    addBooking(booking)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        serviceId: services[0]?.id || '',
        date: '',
        time: '',
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        notes: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const selectedService = services.find((s) => s.id === formData.serviceId)

  return (
    <div className="booking-page">
      <div className="container">
        <h1>Book a Service</h1>
        <p className="booking-intro">
          Schedule your audio engineering session with us
        </p>

        <div className="booking-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="serviceId">Select Service *</label>
              <select
                id="serviceId"
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                required
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - ${service.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="clientName">Full Name *</label>
              <input
                id="clientName"
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="clientEmail">Email *</label>
                <input
                  id="clientEmail"
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="clientPhone">Phone *</label>
                <input
                  id="clientPhone"
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your project, special requirements, etc."
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              Complete Booking
            </button>
          </form>

          <div className="booking-summary">
            <h2>Booking Summary</h2>
            {selectedService && (
              <>
                <div className="summary-item">
                  <span>Service:</span>
                  <strong>{selectedService.name}</strong>
                </div>
                <div className="summary-item">
                  <span>Duration:</span>
                  <strong>{selectedService.duration} minutes</strong>
                </div>
                <div className="summary-item">
                  <span>Price:</span>
                  <strong className="price">${selectedService.price}</strong>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-item total">
                  <span>Total:</span>
                  <strong>${selectedService.price}</strong>
                </div>
              </>
            )}
          </div>
        </div>

        {submitted && (
          <div className="success-message">
            <p>✓ Booking submitted successfully! We'll confirm your booking shortly.</p>
          </div>
        )}
      </div>
    </div>
  )
}
