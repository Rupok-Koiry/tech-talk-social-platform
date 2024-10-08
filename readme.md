# Tech Talk - A social platform

Welcome to **Tech Talk**! This guide will help you set up and run both the server and client sides of the Tech Talk System application locally on your machine.

## Table of Contents

- [Project Overview](#project-overview)
- [Live URL](#live-url)
- [Features](#features)
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)

## Project Overview

The "Tech Talk" project is a dynamic full-stack web application designed to help tech enthusiasts navigate and master the ever-evolving world of technology.

## Live URL

Check out the live version of the application here: [Tech Talk](https://ph-assignment-06-client.vercel.app/)

## Features

- **User Authentication**: Secure sign-up, log-in, and profile management with JWT-based authentication.
- **Profile Management**: Users can retrieve, add, update, and delete their profile information.
- **Content Creation**: Rich text editor for users to create and share tech tips, guides, and personal experiences.
- **Post Management**: Manage posts related to technology tips, gadgets, software, and troubleshooting.
- **Premium Content**: Payment integration (SSLCommerz, AAMARPAY, or Stripe) for accessing exclusive content and features.
- **Social Interactions**: Users can upvote, comment, and interact with other tech enthusiasts, with features like following users and discussion threads.
- **Admin Panel**: Full control for administrators to manage user-generated content, user activity, and site analytics.
- **Analytics**: Display content engagement and user activity through visual charts (using `react-chartjs-2`).

## Technology Used

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT** for Authentication
- **Bcrypt** for Password Hashing
- **Zod** for Validation
- **TypeScript**
- **Dotenv**

### Frontend

- **Nextjs**
- **Tailwind CSS**
- **Framer Motion** for Animations

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 20 or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6 or higher)

## Installation

### Server

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Rupok-Koiry/ph-assignment-06
   cd ph-assignment-06/server
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

### Client

1. **Navigate to the client directory**:

   ```sh
   cd ../client
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

## Setting Up Environment Variables

Create a `.env` file in both the `server` and `client` directories and add the required environment variables:

### Server

```env
NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://<user_name>:<user_password>@cluster0.etdfbfi.mongodb.net/ph-university?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=12
JWT_SECRET=rupok2024
JWT_EXPIRES_IN=30d
JWT_COOKIE_EXPIRES_IN=30
```

### Client

```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:8000/api
```

## Running the Application

### Server

To run the server in development mode with hot-reloading:

```sh
cd server
npm run start:dev
```

The server will be accessible at http://localhost:8000.

### Client

To run the client in development mode:

```sh
cd client
npm start
```

The client will be accessible at http://localhost:3000.
Thank you for using **Tech Talk**! Happy Coding!
