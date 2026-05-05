<div align="center">

<img src="https://img.shields.io/badge/version-v2.0-4CAF50?style=flat-square" alt="version"/>
<img src="https://img.shields.io/badge/status-In%20Development-orange?style=flat-square" alt="status"/>
<img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license"/>
<img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="react"/>
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js" alt="node"/>
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb" alt="mongo"/>

<br/>
<br/>

# 💆 CareGroom

### *Your beauty & grooming service marketplace*

**CareGroom** is a full-stack marketplace platform that connects customers with verified local beauty and grooming professionals — barbers, beauticians, spa therapists, and more. Customers discover, book, pay for, and review services entirely through one seamless platform.

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [API Routes](#-api-routes) · [Database Schema](#-database-schema) · [Deployment](#-deployment) · [Roadmap](#-roadmap)

</div>

---
### Figma Link : https://www.figma.com/design/XbIiYO9EJB0hDrNmzvaNrg/Untitled?node-id=1-7331&t=e2uZqzqw3143fD1s-1
### Project Live link : https://care-groom.vercel.app/
### Youtube Link : https://youtu.be/GF5e--MR9v8
### Github Closed PR Link : https://github.com/codinggita/careGroom/pulls?q=is%3Apr+is%3Aclosed
---

### Problem Statement 

## 📌 Detailed Problem Statement

In the modern digital era, users expect fast, reliable, and convenient solutions for their everyday service needs, such as grooming, home care, and personal assistance. However, the current service ecosystem is highly fragmented and inefficient, creating significant challenges for both customers and service providers.

## 🔍 Issues Faced by Customers

1. **Lack of Trust and Verification**  
   Many platforms do not ensure proper verification of service providers, making it difficult for users to trust the quality and safety of services offered.

2. **Scattered and Unorganized Information**  
   Users often have to browse multiple platforms or rely on offline references to find suitable professionals, which is time-consuming and inefficient.

3. **Poor User Experience**  
   Existing systems may have complex interfaces, unclear navigation, and slow performance, leading to frustration during service discovery and booking.

4. **Lack of Transparency**  
   Pricing, service details, and availability are often unclear or inconsistent, making it difficult for users to make informed decisions.

5. **Inefficient Booking Process**  
   Booking a service may involve multiple steps, calls, or manual coordination, reducing convenience and increasing the chances of errors.

6. **No Centralized Management System**  
   Users lack a unified platform to manage bookings, track service history, and maintain preferences like favorite professionals or saved locations.

---

## 🧑‍🔧 Issues Faced by Service Professionals

1. **Limited Digital Presence**  
   Many skilled professionals struggle to gain visibility due to the absence of a dedicated and accessible platform.

2. **Difficulty in Customer Acquisition**  
   Professionals often depend on word-of-mouth or local reach, limiting their ability to expand their client base.

3. **Lack of Portfolio Showcase**  
   There is no structured way to present their skills, experience, and services to potential customers.

4. **Inefficient Booking and Scheduling**  
   Managing appointments manually leads to scheduling conflicts, missed bookings, and reduced productivity.

5. **Poor Customer Interaction Tools**  
   Communication with clients is often unstructured and scattered across different channels, leading to inefficiencies.

---

## ⚠️ Overall System Gaps

- Absence of a **centralized and integrated platform** for service discovery and booking  
- Lack of **trust-building mechanisms** such as verified profiles and structured information  
- No efficient way to **bridge the gap between demand (users) and supply (professionals)**  
- Limited use of modern technology to improve **user experience and operational efficiency**

---

## 🎯 Need for a Solution

There is a clear need for a **unified, user-friendly, and reliable platform** that:

- Connects users with **verified professionals**  
- Provides **transparent service details and pricing**  
- Offers a **smooth and efficient booking experience**  
- Enables users to **manage and track their service interactions**  
- Empowers professionals with tools to **grow their visibility and manage their work efficiently**

---

## ✅ Proposed Solution

**Care & Groom** is designed to address these challenges by creating a modern, scalable platform that bridges the gap between users and service providers. It ensures convenience, transparency, and trust while delivering a seamless digital experience for all stakeholders.
## 📌 Project Overview

CareGroom solves a real problem: finding and booking trustworthy, local grooming professionals is fragmented and unreliable. The platform provides:

- **Customers** — a curated, reviewed marketplace to discover and book verified professionals online
- **Professionals** — a dedicated dashboard to manage their profile, services, availability, and earnings
- **Admins** — a control panel to verify professionals, monitor platform health, and manage users

The platform handles the entire service lifecycle: **discovery → booking → payment → review** — all in one place.

> **v1.0 Target:** 8 development phases · 10 weeks · 50+ verified professionals at launch

---

## ✨ Features

### 👤 For Customers
- Browse and filter professionals by category, location, rating, and price
- View detailed professional profiles with portfolios, services, and verified reviews
- Book services in under 3 minutes with a 3-step booking wizard
- Pay online via Razorpay or choose cash on service
- Real-time booking confirmation and email notifications
- Review and rate professionals after completed services
- Manage upcoming and past bookings from a personal dashboard

### 💼 For Professionals
- Create a rich public profile with bio, portfolio photos, and service listings
- Set working hours, service areas, and block holidays
- Accept or decline incoming bookings in real-time
- Receive instant in-app and email notifications for every booking event
- Track earnings and completed bookings from a pro dashboard
- Get a verified badge after admin approval

### 🛡️ For Admins
- Review and approve/reject professional registrations with uploaded ID verification
- Suspend or reinstate professionals
- View platform-wide stats (users, pros, bookings, revenue)
- Manage all users from a central admin dashboard

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 (Vite), React Router v6, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **File Storage** | Cloudinary (profile photos, portfolios, ID docs) |
| **Email** | Nodemailer + Gmail SMTP / Resend.com |
| **Security** | helmet.js, express-rate-limit, express-mongo-sanitize, hpp |
| **Validation** | express-validator (backend), custom hooks (frontend) |
| **Frontend Deploy** | Vercel |
| **Backend Deploy** | Render |

---

## 📁 Folder Structure

```
caregroom/
├── frontend/                   # React + Vite app (→ Vercel)
│   └── src/
│       ├── components/         # Reusable UI components
│       │   ├── common/         # Navbar, Footer, Loader, SkeletonCard…
│       │   ├── auth/           # LoginForm, RegisterForm, ProRegisterForm
│       │   ├── professional/   # ProCard, ProProfile, PortfolioGallery…
│       │   ├── booking/        # BookingSteps, DateTimePicker…
│       │   ├── review/         # ReviewForm, ReviewCard, RatingBreakdown
│       │   ├── payment/        # RazorpayButton
│       │   └── admin/          # ProApprovalCard, AdminStatsCard
│       ├── pages/              # Route-level pages by role
│       │   ├── public/         # Landing, BrowsePros, ProDetail…
│       │   ├── auth/           # Login, Register, ForgotPassword
│       │   ├── user/           # UserDashboard, MyBookings, Notifications
│       │   ├── pro/            # ProDashboard, ManageServices, Earnings
│       │   └── admin/          # AdminDashboard, PendingApprovals…
│       ├── context/            # AuthContext, NotificationContext, SocketContext
│       ├── hooks/              # useAuth, useSocket, usePagination, useDebounce
│       ├── services/           # Axios API service layer (per domain)
│       ├── utils/              # formatDate, formatPrice, validators, imageCompress
│       └── constants/          # routes.js, categories.js, bookingStatus.js
│
└── backend/                    # Node.js + Express API (→ Render)
    └── src/
        ├── config/             # db.js, cloudinary.js, razorpay.js, email.js
        ├── models/             # User, Professional, Booking, Review, Notification, Payment
        ├── controllers/        # auth, user, professional, booking, review, payment, admin
        ├── routes/             # Express routers (one per domain)
        ├── middleware/         # auth, role, upload, validate, rateLimiter, errorHandler
        ├── validators/         # express-validator schemas
        ├── sockets/            # notificationSocket.js (Socket.io events)
        ├── utils/              # sendEmail, generateToken, calculateRating, APIError
        └── app.js              # Express app setup
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- MongoDB Atlas account
- Cloudinary account
- Razorpay account (test mode for development)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/caregroom.git
cd caregroom
```

### 2. Set up the Backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values (see Environment Variables below)
npm run dev
```

Backend runs at `http://localhost:5000`

### 3. Set up the Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Add VITE_API_URL=http://localhost:5000/api
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend — `backend/.env`

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/caregroom

# JWT
JWT_SECRET=your_super_secret_key
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email (Gmail SMTP or Resend)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend — `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
VITE_SOCKET_URL=http://localhost:5000
```

> ⚠️ **Never commit `.env` files.** Both are listed in `.gitignore`.

---

## 📡 API Routes

### Authentication — `/api/auth`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/register` | Public | Register user or professional |
| `POST` | `/login` | Public | Login and receive JWT tokens |
| `POST` | `/logout` | Auth | Invalidate refresh token |
| `GET` | `/me` | Auth | Get logged-in user profile |
| `POST` | `/forgot-password` | Public | Send password reset email |
| `POST` | `/reset-password` | Public | Reset password via token |

### Professionals — `/api/professionals`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/` | Public | Browse all verified professionals |
| `GET` | `/:id` | Public | Get a professional's public profile |
| `PUT` | `/profile` | Pro | Update own profile, bio, and services |
| `PUT` | `/availability` | Pro | Set working hours and blocked dates |
| `POST` | `/portfolio` | Pro | Upload portfolio photo to Cloudinary |

### Bookings — `/api/bookings`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/` | User | Create a new booking |
| `GET` | `/my` | User | Get all bookings for current user |
| `GET` | `/pro` | Pro | Get all incoming bookings |
| `PUT` | `/:id/accept` | Pro | Accept a booking |
| `PUT` | `/:id/decline` | Pro | Decline a booking |
| `PUT` | `/:id/complete` | Pro | Mark booking as completed |
| `PUT` | `/:id/cancel` | User | Cancel a booking (24h policy) |
| `GET` | `/:id` | Auth | Get booking detail |

### Reviews — `/api/reviews`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/` | User | Submit review for a completed booking |
| `GET` | `/pro/:proId` | Public | Get all reviews for a professional |
| `PUT` | `/:id` | User | Edit own review (within 48h) |
| `DELETE` | `/:id` | User | Delete own review (within 48h) |

### Payments — `/api/payments`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/create-order` | User | Create a Razorpay order |
| `POST` | `/verify` | User | Verify payment signature |
| `POST` | `/webhook` | Public | Razorpay webhook handler |

### Admin — `/api/admin`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/professionals/pending` | Admin | List pros awaiting approval |
| `PUT` | `/professionals/:id/approve` | Admin | Approve a professional |
| `PUT` | `/professionals/:id/reject` | Admin | Reject with reason |
| `PUT` | `/professionals/:id/suspend` | Admin | Suspend/unsuspend a pro |
| `GET` | `/stats` | Admin | Platform-wide statistics |

---



> **Indexes:** `professionals.location` uses a `2dsphere` index for location-based queries. `professionals.categories`, `bookings.userId`, and `bookings.proId` are indexed for performance.

---

## 🔒 Security

All security requirements must be met before going live:

- **Passwords** hashed with bcrypt (salt rounds: 12)
- **Rate limiting** — 5 requests/minute on all auth endpoints (`express-rate-limit`)
- **NoSQL injection** prevention via `express-mongo-sanitize`
- **HTTP Parameter Pollution** protection via `hpp`
- **Secure HTTP headers** via `helmet.js`
- **Input validation** on every route via `express-validator`
- **Error responses** — stack traces never exposed in production
- **`.env` files** — in `.gitignore`, never committed to GitHub

---

## 🚢 Deployment

### Frontend → Vercel

```bash
# In your Vercel project, set environment variables:
VITE_API_URL=https://caregroom-api.onrender.com/api
VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
VITE_SOCKET_URL=https://caregroom-api.onrender.com
```

### Backend → Render

```bash
# Build Command:  npm install
# Start Command:  node server.js
# Set all backend .env variables in Render's environment settings
```



## 📅 Roadmap

| Phase | Description 
|---|---|
| ✅ **Phase 0** | Project setup, folder structure, DB connection 
| 🔄 **Phase 1** | Authentication — register, login, JWT, roles 
| ⬜ **Phase 2** | Profiles, services, discovery, admin verification 
| ⬜ **Phase 3** | Booking engine — 3-step flow, availability, management 
| ⬜ **Phase 4** | Reviews, ratings, trust signals 
| ⬜ **Phase 5** | Payments (Razorpay) + real-time notifications (Socket.io) 
| ⬜ **Phase 6** | Security hardening, testing, performance 
| ⬜ **Phase 7** | Deployment, launch prep, 50 pros onboarded 

### Post-launch (v1.1)
- Location-based search with geospatial queries (GeoJSON + `$near`)
- Loyalty points and referral system
- Chat between customer and professional
- Progressive Web App (PWA) support
- TypeScript migration

---

## 🤝 Contributing

This is currently a solo project. Contributions, ideas, and feedback are welcome after v1.0 launches.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ · React · Node.js · MongoDB · Socket.io · Razorpay

**CareGroom** — *Connecting people with the professionals who make them feel their best.*

</div>
