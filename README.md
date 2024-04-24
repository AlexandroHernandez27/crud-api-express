# Express Application with MongoDB Atlas

This is an Express application that connects to MongoDB Atlas. The connection settings for MongoDB are defined using environment variables.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed locally (preferably the latest LTS version)
- Docker installed if you wish to run the application in a container
- A MongoDB Atlas account and a database created to connect with this application

## Setup

Clone the repository to your local machine:

```bash
git clone https://github.com/AlexandroHernandez27/crud-api-express.git
cd crud-api-express
```

Copy the .env.example file to create a .env file that will store your environment variables:

```bash
cp .env.example .env
```

Edit the .env file to include the correct MongoDB Atlas connection URI and any other necessary environment variables.

## Running the Application

### Locally

To run the application locally using Node.js, you will need to install dependencies and then start the application using Nodemon for live reloading:

```bash
npm install
nodemon index.js
```

### Using Docker

To run the application using Docker, build and run the container with the following commands:

```bash
docker-compose build
docker-compose up -d
```