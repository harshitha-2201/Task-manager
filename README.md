# Task Management Application

A task management application built with React, Express.js, and MongoDB. This application allows users to create, update, delete, and view tasks.
It also includes user authentication to manage tasks on a per-user basis.

## Features

- User authentication with JWT
- CRUD operations for tasks
- Responsive UI with Tailwind CSS
- Built with React on the frontend and Express.js on the backend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development, or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
### Install dependencies for both frontend and backend:

-cd client
- npm install
- cd server
- npm init -y

### Configuration
-REACT_APP_API_URL=http://localhost:3001/api

# Create a .env file in the backend directory and add the following environment variables:
-MONGO_URI=mongodb://localhost:27017/your-database-name
-JWT_SECRET=your_jwt_secret

### Running the Application
