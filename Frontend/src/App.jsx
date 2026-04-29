import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import LandingPage from './pages/public/LandingPage';
import SmoothScroll from './components/common/SmoothScroll';
import DashboardLayout from './components/common/layout/DashboardLayout';
import Overview from './pages/pro/Overview';
import Schedule from './pages/pro/Schedule';
import Bookings from './pages/pro/Bookings';
import Clients from './pages/pro/Clients';
import Services from './pages/pro/Services';
import Earnings from './pages/pro/Earnings';
import Settings from './pages/pro/Settings';
import UserLayout from './components/common/layout/UserLayout';
import AdminLayout from './components/common/layout/AdminLayout';
import UserOverview from './pages/user/Overview';
import UserBookings from './pages/user/Bookings';
import UserHistory from './pages/user/History';
import UserFavorites from './pages/user/Favorites';
import UserSettings from './pages/user/Settings';
import Explore from './pages/user/Explore';
import Professionals from './pages/user/Professionals';
import HowItWorks from './pages/user/HowItWorks';
import BookingFlow from './pages/user/BookingFlow';
import BookingConfirmation from './pages/user/BookingConfirmation';
import BookingSuccess from './pages/user/BookingSuccess';
import SavedLocations from './pages/user/SavedLocations';
import ClientDirectory from './pages/user/ClientDirectory';
import ArtisanProfile from './pages/user/ArtisanProfile';
import AdminDashboard from './pages/admin/AdminDashboard';
import VerificationQueue from './pages/admin/VerificationQueue';
import ArtisanDirectory from './pages/admin/ArtisanDirectory';
import ArtisanPerformance from './pages/admin/ArtisanPerformance';
import ServicesManagement from './pages/admin/ServicesManagement';
import Analytics from './pages/admin/Analytics';
import ServiceAnalytics from './pages/admin/ServiceAnalytics';
import AdminProfile from './pages/admin/AdminProfile';
import './App.css';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="clients" element={<Clients />} />
              <Route path="services" element={<Services />} />
              <Route path="earnings" element={<Earnings />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserOverview />} />
              <Route path="bookings" element={<UserBookings />} />
              <Route path="history" element={<UserHistory />} />
              <Route path="favorites" element={<UserFavorites />} />
              <Route path="settings" element={<UserSettings />} />
              <Route path="explore" element={<Explore />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="professionals" element={<Professionals />} />
              <Route path="artisan/:id" element={<ArtisanProfile />} />
              <Route path="book/:artisanId" element={<BookingFlow />} />
              <Route path="book/:artisanId/confirm" element={<BookingConfirmation />} />
              <Route path="book/:artisanId/success" element={<BookingSuccess />} />
              <Route path="locations" element={<SavedLocations />} />
              <Route path="client-directory" element={<ClientDirectory />} />
            </Route>

            {/* Admin Section with New Navbar */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<ArtisanDirectory />} />
              <Route path="users/:id" element={<ArtisanPerformance />} />
              <Route path="artisans" element={<VerificationQueue />} />
              <Route path="services" element={<ServicesManagement />} />
              <Route path="services/:id" element={<ServiceAnalytics />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
