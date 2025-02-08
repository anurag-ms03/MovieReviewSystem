# Movie Review System

## Overview
Movie Review System is a full-stack web application that allows users to browse movies, watch trailers, and leave reviews. The project is built using **Spring Boot** for the backend and **React** for the frontend, with **MongoDB** as the database.

## Tech Stack
- **Backend:** Spring Boot, Java, MongoDB
- **Frontend:** React, React Router, Bootstrap, Material-UI
- **Database:** MongoDB
- **API Communication:** Axios
-**API Testing:** Postman
## Features
- View a list of movies with posters and trailers
- Watch movie trailers directly on the website
- Read and submit movie reviews
- User authentication for posting reviews

## Setup Instructions

### Backend (Spring Boot)
1. Navigate to the backend folder:
   ```sh
   cd moviesSpringboot
   ```
2. Build and run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```
3. The backend runs on `http://localhost:8080`

### Frontend (React)
1. Navigate to the frontend folder:
   ```sh
   cd movie-gold-v1
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
4. The frontend runs on `http://localhost:3000`

5. movies.json is the database file go to mongoadb Atlas and import the file and create a connection
    
## API Endpoints
- `GET /api/v1/movies` - Fetch all movies
- `GET /api/v1/movies/{id}` - Get details of a specific movie
- `POST /api/v1/reviews` - Add a movie review

## Future Enhancements
- Implement user authentication and authorization
- Add a "Watch Later" list for users
- Enhance UI with better styling and animations

## Contributing
Feel free to fork this repository and submit pull requests to improve the project.



