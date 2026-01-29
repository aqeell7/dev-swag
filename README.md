# MERN E-Commerce Application 🛒

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This application features a dynamic product catalog, image uploading capabilities, and a fully functional shopping cart managed by Redux.

## 🚀 Features

- **Product Management:**
  - View all products with images and prices.
  - **Admin Panel:** Add new products with image uploads (handled via Multer).
  - Images are stored locally on the server and served statically.
- **Shopping Cart:**
  - Add items to cart.
  - Adjust quantities (increase/decrease).
  - Calculate totals dynamically.
  - Global state management using **Redux Toolkit**.
- **Backend API:**
  - RESTful API built with Express.js.
  - MongoDB integration using Mongoose.
  - Static file serving for uploaded images.

## 🛠️ Tech Stack

**Frontend:**
- React (Vite/CRA)
- Redux Toolkit (State Management)
- React Router DOM (Navigation)
- CSS3 (Styling)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- Multer (File Uploads)
- Cors (Cross-Origin Resource Sharing)

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <your-project-folder>