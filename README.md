# Bully Sound Services - React Website

A modern React website for online service booking for audio engineering services.

## Features

- 🎵 **Service Showcase** - Display various audio engineering services
- 📅 **Online Booking** - Easy-to-use booking system with date/time selection
- 📊 **Dashboard** - View and manage all bookings with status tracking
- 🎨 **Modern UI** - Clean, responsive design with Lucide icons
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🛠️ **Type-Safe** - Full TypeScript support

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Navigation and routing
- **Zustand** - State management
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties

## Project Structure

```
src/
├── components/        # Reusable components (Header, Footer, Layout)
├── pages/            # Page components (Home, Services, Booking, Dashboard)
├── store/            # Zustand store for state management
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/seshnx/Bully-Sound-Services.git
cd Bully-Sound-Services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Pages

### Home
- Hero section with call-to-action
- Features showcase
- Service preview
- CTA section

### Services
- Detailed list of all available services
- Service information with pricing and duration
- Direct booking link

### Booking
- Service selection dropdown
- Date and time picker
- Client contact information form
- Additional notes field
- Booking summary with total price
- Form validation
- Success confirmation

### Dashboard
- Booking statistics (total, pending, confirmed, completed)
- Comprehensive booking table
- Status management (pending, confirmed, completed, cancelled)
- Quick actions (confirm, delete)
- Empty state handling

## Styling

The project uses CSS with CSS custom properties (variables) for a consistent design system:

- Primary color: `#6366f1` (indigo)
- Secondary color: `#ec4899` (pink)
- Accent colors for success, warning, and danger states
- Gray scale from 50 to 900

All styles are responsive and mobile-friendly with breakpoints at 768px.

## State Management

Bookings and services are managed using Zustand store located in `src/store/bookingStore.ts`:

- **Services**: Pre-populated with demo data
- **Bookings**: Created and managed from the booking form
- **Status Tracking**: pending → confirmed → completed

## Future Enhancements

- Backend API integration
- User authentication
- Email confirmations
- Payment processing
- Analytics and reporting
- Admin panel
- Calendar integration
- Email notifications
- Review and ratings system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, please contact: contact@bullysoundservices.com

---

**Built with ❤️ for Bully Sound Services**
