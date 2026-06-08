import { useBookingStore } from '@/store/bookingStore'
import './Dashboard.css'
import { Calendar, Mail, Phone, Trash2, CheckCircle, Clock } from 'lucide-react'

export default function Dashboard() {
  const { bookings, deleteBooking, updateBooking } = useBookingStore()

  const handleStatusChange = (id: string, status: 'confirmed' | 'completed') => {
    updateBooking(id, { status })
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(id)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'status-confirmed'
      case 'completed':
        return 'status-completed'
      case 'pending':
        return 'status-pending'
      case 'cancelled':
        return 'status-cancelled'
      default:
        return ''
    }
  }

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === 'pending').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Booking Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Bookings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.confirmed}</div>
            <div className="stat-label">Confirmed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>

        <div className="bookings-section">
          <h2>Recent Bookings</h2>

          {bookings.length === 0 ? (
            <div className="empty-state">
              <Clock size={48} />
              <p>No bookings yet. <a href="/booking">Create one now!</a></p>
            </div>
          ) : (
            <div className="bookings-table-wrapper">
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Contact</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="booking-row">
                      <td>
                        <strong>{booking.clientName}</strong>
                      </td>
                      <td>
                        <div className="contact-info">
                          <div className="contact-item">
                            <Mail size={16} /> {booking.clientEmail}
                          </div>
                          <div className="contact-item">
                            <Phone size={16} /> {booking.clientPhone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <Calendar size={16} />
                        {new Date(booking.date).toLocaleDateString()} at {booking.time}
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          {booking.status === 'pending' && (
                            <button
                              onClick={() => handleStatusChange(booking.id, 'confirmed')}
                              className="btn-action btn-confirm"
                              title="Confirm"
                            >
                              <CheckCircle size={18} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(booking.id)}
                            className="btn-action btn-delete"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
