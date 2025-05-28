# CampusOnChain Backend

This is the backend service for CampusOnChain, a platform for connecting university students based on their interests and skills.

## Features

- User profile management
- Interest and skill tracking
- Matchmaking algorithm based on interests and skills
- RESTful API endpoints

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3001
   NODE_ENV=development
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/campus_on_chain?schema=public"
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_EXPIRES_IN="7d"
   CORS_ORIGIN="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

## Development

Start the development server:

```bash
npm run dev
```

The server will start on port 3001 by default.

## API Endpoints

### Users

- `GET /api/users/:walletAddress` - Get user by wallet address
- `POST /api/users` - Create or update user
- `PUT /api/users/:walletAddress/interests` - Update user interests
- `PUT /api/users/:walletAddress/skills` - Update user skills

### Matchmaking

- `GET /api/matches/potential/:walletAddress` - Get potential matches
- `POST /api/matches` - Create a match
- `GET /api/matches/:walletAddress` - Get user's matches

## Database Management

To view and manage the database using Prisma Studio:

```bash
npm run prisma:studio
```

## Testing

Run tests:

```bash
npm test
```

## Building for Production

Build the TypeScript code:

```bash
npm run build
```

Start the production server:

```bash
npm start
```
