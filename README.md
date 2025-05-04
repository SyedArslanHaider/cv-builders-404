# Final Project Starter

## Overview

This repository contains a starter template for your final project, including both a React frontend and an Express backend. The project is designed to be modular, scalable, and easy to maintain.

To get started with this template just use the [Github UI](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to make a copy and get coding 🚀 

## Project Structure

```
final-project-starter/
├── web/                  # React frontend application
├── api/                  # Express backend API
└── package.json          # Global scripts and dependencies
```

## Getting Started

### Prerequisites

- Node.js LTS
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd final-project-starter
   ```
3. Install dependencies in the root directory:
   ```bash
   npm install
   ```
4. Install dependencies for both the frontend and backend:
   ```bash
   npm install --prefix web
   npm install --prefix api
   ```
5. Run the prepare script to set up Husky:
   ```bash
   npm run prepare
   ```

### Development

Start both the frontend and backend development servers:

```bash
npm run dev
```

This will start the React frontend at `http://localhost:5173` and the Express backend at `http://localhost:3000`.

## Key Features

- **Frontend**: Built with React and Vite for fast development and optimized production builds.
- **Backend**: Built with Express, featuring a modular architecture with controllers, services, and repositories.
- **Code Quality**: Includes ESLint, Prettier, and Stylelint configurations for consistent code quality.
- **Pre-commit Hook**: Ensures linting and formatting checks pass before committing.

## Individual Project Details

- [Frontend (web)](./web/README.md)
- [Backend (api)](./api/README.md)

## Customization Ideas

- Add a database connection to the backend (e.g PostgreSQL).
- Implement authentication and authorization.
- Add testing frameworks for both frontend and backend.

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Express Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)
