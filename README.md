# Backend Project

This project is a backend application built using TypeScript, Prisma, and Express. It provides a health check endpoint and is structured to support multi-tenancy and various middleware functionalities.

## Project Structure

The project is organized as follows:

```
backend/
├── prisma/                  # Database schema and migrations
│   ├── schema.prisma       # Defines the database schema
│   ├── migrations/          # Contains migration files
│   └── seed.ts              # Seeds the database with initial data
├── src/                     # Source code for the application
│   ├── config/              # Configuration files
│   ├── controllers/         # Controllers for handling requests
│   ├── routes/              # Route definitions
│   ├── services/            # Business logic
│   ├── repositories/        # Data access layer
│   ├── middlewares/         # Middleware functions
│   ├── utils/               # Utility functions
│   ├── validation/          # Request validation schemas
│   └── app.ts               # Entry point of the application
├── tests/                   # Test files
│   ├── unit/                # Unit tests
│   └── integration/         # Integration tests
├── .env.example             # Example environment variables
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose configuration
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .husky/                  # Git hooks for code quality
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
└── .github/workflows/ci.yml # CI/CD workflow configuration
```

## Getting Started

### Prerequisites

- Node.js (version >= 14)
- Docker (for containerization)
- PostgreSQL (or any other database supported by Prisma)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd FINDERAPP
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Run database migrations:
   ```
   npx prisma migrate dev
   ```

5. Seed the database (if applicable):
   ```
   npx ts-node prisma/seed.ts
   ```

### Running the Application

To start the application, run:
```
npm run start
```

### Health Check Endpoint

The application exposes a health check endpoint at `/health`. You can test it by sending a GET request to this endpoint. It will return a simple status message indicating that the service is up and running.

### Running Tests

To run the tests, use:
```
npm run test
```

### Docker

To build and run the application using Docker, use:
```
docker-compose up --build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.