# Flight API Logger
A Node.js application for logging flight API data, built with Express, MongoDB, and Mongoose. The app provides endpoints to store and manage flight API logs with validation using Joi.
## Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or accessible via a connection string)
- Docker and Docker Compose (if running with Docker)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rashid-mamun/St-logger
   cd flight-api-logger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the required environment variables (see [Environment Variables](#environment-variables)).

## Running Locally
1. Ensure MongoDB is running locally or provide a valid MongoDB connection string in the `.env` file.
2. Start the application:
   ```bash
   npm start
   ```
   For development with auto-restart:
   ```bash
   npm run start-dev
   ```

3. The app will be available at `http://localhost:5000`.

## Running with Docker
You can run the application using either a single Docker container or Docker Compose (recommended for running both the app and MongoDB together).

### Option 1: Single Docker Container
1. Build the Docker image:
   ```bash
   docker build -t flight-api-logger .
   ```

2. Run the container, ensuring MongoDB is accessible (e.g., running locally or in another container):
   ```bash
   docker run -p 5000:5000 --env-file .env flight-api-logger
   ```

3. The app will be available at `http://localhost:5000`.

### Option 2: Docker Compose (App + MongoDB)
1. Ensure Docker Compose is installed.
2. Start the app and MongoDB containers:
   ```bash
   docker-compose up --build
   ```

3. The app will be available at `http://localhost:5000`, and MongoDB will be accessible at `localhost:27017` (if needed).

4. To stop the containers:
   ```bash
   docker-compose down
   ```

   To stop and remove volumes (clear MongoDB data):
   ```bash
   docker-compose down -v
   ```

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost/fpa-logger
```

- `PORT`: The port the application runs on (default: 5000).
- `MONGODB_URI`: The MongoDB connection string (used for local runs; overridden in Docker Compose).

## API Endpoints
- **GET /**: Displays a welcome message ("App Online, 2023!").
- **POST /flight-api-logger**: Logs flight API data. Requires a JSON body with fields like `provider` and `expiry`.
- **GET /api**: Returns a success message for testing.

Example POST request to `/flight-api-logger`:
```json
{
  "provider": "SABRE",
  "expiry": "TEMPORARY",
  "searchId": "12345",
  "message": "Sample log",
  "executionTime": "100ms",
  "request": "Sample request",
  "response": "Sample response",
  "type": "INFO"
}
