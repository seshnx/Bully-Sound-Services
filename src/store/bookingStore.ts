import { create } from 'zustand'

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // in minutes
  category: string
}

export interface Booking {
  id: string
  serviceId: string
  date: string
  time: string
  clientName: string
  clientEmail: string
  clientPhone: string
  notes: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

interface BookingStore {
  services: Service[]
  bookings: Booking[]
  addService: (service: Service) => void
  removeService: (id: string) => void
  addBooking: (booking: Booking) => void
  updateBooking: (id: string, booking: Partial<Booking>) => void
  deleteBooking: (id: string) => void
  getBookingsByStatus: (status: Booking['status']) => Booking[]
}

export const useBookingStore = create<BookingStore>((set, get) => ({
  services: [
    {
      id: '1',
      name: 'Recording Session',
      description: 'Professional recording studio time',
      price: 50,
      duration: 60,
      category: 'Recording',
    },
    {
      id: '2',
      name: 'Mixing & Mastering',
      description: 'Full mix and master of your track',
      price: 75,
      duration: 120,
      category: 'Production',
    },
    {
      id: '3',
      name: 'Vocal Production',
      description: 'Professional vocal recording and production',
      price: 60,
      duration: 90,
      category: 'Recording',
    },
  ],
  bookings: [],
  addService: (service) =>
    set((state) => ({
      services: [...state.services, service],
    })),
  removeService: (id) =>
    set((state) => ({
      services: state.services.filter((s) => s.id !== id),
    })),
  addBooking: (booking) =>
    set((state) => ({
      bookings: [...state.bookings, booking],
    })),
  updateBooking: (id, updates) =>
    set((state) => ({
      bookings: state.bookings.map((b) =>
        b.id === id ? { ...b, ...updates } : b
      ),
    })),
  deleteBooking: (id) =>
    set((state) => ({
      bookings: state.bookings.filter((b) => b.id !== id),
    })),
  getBookingsByStatus: (status) => {
    const state = get()
    return state.bookings.filter((b) => b.status === status)
  },
}))
