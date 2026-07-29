# 🚛 TAMP MVP

## Truck Asset Matchmaking Platform

TAMP (Truck Asset Matchmaking Platform) is a web-based logistics platform designed to connect **Freight Owners** with **Transporters** through an intelligent asset matchmaking system.

The platform streamlines the freight allocation process by recommending suitable transporters based on factors such as truck availability, vehicle type, location, and shipment requirements. By reducing manual coordination and improving fleet utilisation, TAMP aims to make freight transportation more efficient, reliable, and transparent.

This project was developed as a **Minimum Viable Product (MVP)** using **React** and **Vite** to demonstrate the frontend functionality of the platform.

---

## Project Overview

The logistics industry often faces challenges such as empty return trips, inefficient truck utilisation, lengthy manual booking processes, and limited visibility throughout the transportation lifecycle.

TAMP addresses these challenges by providing three dedicated user portals:

- **Freight Owner Portal** – Post freight loads, receive transporter recommendations, manage shipments, and track deliveries.
- **Transporter Portal** – Advertise available trucks, manage fleet availability, review matched loads, and monitor deliveries.
- **Administrator Portal** – Manage users, monitor platform activity, review compliance, maintain audit records, and oversee overall platform performance.

The application demonstrates the complete workflow of a digital freight matchmaking platform while providing a scalable foundation for future backend integration.

---
## Problem Statement

The freight and logistics industry often relies on manual communication between freight owners and transport companies to arrange shipments. This process can be time-consuming, inefficient, and prone to delays caused by limited visibility of available transport assets.

Many transporters also experience low fleet utilisation due to empty return trips or difficulty finding suitable loads, while freight owners may struggle to identify reliable transport providers that meet their shipment requirements.

These challenges result in increased operational costs, reduced efficiency, and slower delivery times.

TAMP addresses these issues by providing a centralised digital platform that intelligently matches freight loads with available transport assets, allowing stakeholders to manage shipments more efficiently and improve overall logistics operations.

---
## Project Objectives

The primary objectives of the Truck Asset Matchmaking Platform are to:

- Digitise the freight matching process.
- Improve communication between freight owners and transporters.
- Increase truck utilisation through intelligent asset matching.
- Reduce manual administrative processes.
- Improve shipment visibility through trip tracking.
- Provide administrators with tools to manage users, compliance, and platform activity.
- Deliver an intuitive and responsive user experience across all user roles.
- Create a scalable frontend architecture that can easily integrate with backend services in future development phases.

---
## Key Features

### Freight Owner

The Freight Owner portal enables users to create and manage freight shipments from a single dashboard.

Features include:

- Secure user authentication
- Dashboard overview
- Post new freight loads
- View and manage posted loads
- AI-inspired transporter match recommendations
- Accept or reject recommended transporters
- Digital shipment confirmation
- Trip tracking
- Responsive user interface

---

### Transporter

The Transporter portal allows logistics companies to advertise available vehicles and manage deliveries.

Features include:

- Secure user authentication
- Dashboard overview
- Post available trucks
- Manage fleet availability
- View registered trucks
- Receive matched freight opportunities
- Track active deliveries
- View completed deliveries
- Responsive dashboard

---

### Administrator

The Administrator portal provides oversight and management of the platform.

Features include:

- Administrative dashboard
- User management
- Compliance management
- Audit trail
- Platform monitoring
- Analytics dashboard (in progress)

---

### Shared Features

The platform also includes several shared features available across multiple user roles.

- Responsive design
- Modern dashboard interface
- Role-based navigation
- Digital shipment confirmation
- Trip tracking
- Reusable React components
- Clean and consistent user experience

---
## Technology Stack

### Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React Icons

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---
## Project Structure

```
tamp-mvp
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   └── shared/
│   │
│   ├── data/
│   │
│   ├── pages/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── freight-owner/
│   │   ├── landing/
│   │   ├── shared/
│   │   └── transporter/
│   │
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

The project follows a modular React architecture where pages, reusable components, routing, and application data are organised into separate directories. This structure improves maintainability, scalability, and code reuse.

---
## Installation

Clone the repository:

```bash
git clone https://github.com/RefilweSothoane/tamp-mvp.git
```

Navigate into the project directory:

```bash
cd tamp-mvp
```

Install dependencies:

```bash
npm install
```

---
## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---
## User Roles

### Freight Owner

Freight Owners can:

- Post freight loads
- View and manage loads
- Receive transporter recommendations
- Accept or reject matches
- Track shipments
- Receive digital confirmations

### Transporter

Transporters can:

- Advertise available trucks
- Manage fleet availability
- View matched freight loads
- Accept freight opportunities
- Track deliveries

### Administrator

Administrators can:

- Monitor platform activity
- Manage users
- Review compliance
- View audit logs
- Monitor platform analytics

---
## Application Workflow

The Truck Asset Matchmaking Platform follows a simple workflow that connects freight owners, transporters, and administrators.

### Freight Owner Workflow

1. Register or log in to the platform.
2. Access the Freight Owner Dashboard.
3. Post a new freight load.
4. Receive recommended transporters.
5. Review transporter details.
6. Accept the preferred transporter.
7. Receive a digital confirmation.
8. Track the shipment until delivery.

---

### Transporter Workflow

1. Register or log in.
2. Access the Transporter Dashboard.
3. Post available trucks.
4. View matched freight opportunities.
5. Accept freight assignments.
6. Complete deliveries.
7. Update delivery status.

---

### Administrator Workflow

1. Log in as an administrator.
2. Monitor platform activity.
3. Manage registered users.
4. Review compliance documentation.
5. Monitor audit logs.
6. View platform analytics.
7. Maintain overall system operations.

---
## Future Improvements

Future versions of TAMP could include:

- Backend API integration
- PostgreSQL database connectivity
- JWT authentication and authorization
- Real-time GPS tracking
- AI-powered freight matching algorithms
- In-app messaging between users
- Email and SMS notifications
- Mobile application
- Payment gateway integration
- Advanced analytics and reporting
- Live notifications
- Cloud deployment

---
## Authors

**Refilwe Sothoane**

Systems Development Learner

Truck Asset Matchmaking Platform (TAMP MVP)

Developed as part of a Systems Development assessment project.

---