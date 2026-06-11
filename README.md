# 🛒 ShopZone – React E-Commerce SPA

## Overview

ShopZone is a modern Single Page Application (SPA) built using React.js. The application allows users to browse products, view product details, manage a shopping cart, authenticate as a guest user, and complete a protected checkout flow.

This project demonstrates React fundamentals including routing, state management, context API, local storage persistence, and responsive UI design.

---

## Features

### Product Browsing

* View all available products
* Search products by name
* Filter products by category
* Responsive product grid layout

### Product Details

* Dynamic product detail pages using route parameters
* Product image, description, pricing, and features
* Add products to cart

### Shopping Cart

* Global cart state using Context API
* Add and remove products
* Update quantities
* Automatic total price calculation
* Persistent cart using LocalStorage

### Authentication

* Mock guest login
* Global authentication state
* Protected routes

### Checkout Flow

* Protected checkout page
* Redirect unauthenticated users to login
* Order placement flow
* Order success page

### Additional Pages

* Home Page
* Shop Page
* Contact Page
* Cart Page
* Login Page
* Checkout Page
* Success Page

---

## Tech Stack

* React.js
* React Router DOM
* Context API
* LocalStorage
* CSS3
* Lucide React Icons
* Vite

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Checkout.jsx
│   ├── Success.jsx
│   └── Contact.jsx
│
├── data/
│   └── products.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd shopzone
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Learning Outcomes

* React Component Architecture
* Client-Side Routing
* Dynamic Routes with useParams
* Context API State Management
* Local Storage Persistence
* Protected Routes
* Responsive Web Design
* SPA Development Best Practices

---

## Author

Varun B

React.js | Full Stack Development | Frontend Engineering
