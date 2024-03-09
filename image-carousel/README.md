# Image Carousel React App

This React application displays images fetched from the top posts of the "aww" subreddit on Reddit. It functions as an image carousel where users can navigate through the images using left and right buttons.

## Features

- Fetches images from the "aww" subreddit on Reddit using the Reddit API.
- Implements a simple image carousel functionality with left and right navigation buttons.
- Automatically rotates through images in a loop with a specified interval.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Dependencies

- React: Used as the JavaScript library for building the user interface.
- React Hooks: Utilized for managing state and side effects in functional components.

## File Structure

- `App.js`: Main component containing the image carousel functionality.
- `App.css`: Stylesheet for the application.
- `README.md`: Documentation file providing information about the application.

## How to Use

1. Upon opening the application, the images from the top posts of the "aww" subreddit are fetched and displayed in an image carousel.
2. Users can navigate through the images by clicking the left and right buttons.
3. The carousel automatically rotates through the images with a specified interval.

## Important Notes

- This application relies on the Reddit API to fetch images from the "aww" subreddit. Ensure a stable internet connection for proper functionality.
- Adjust the interval for automatic image rotation as needed by modifying the interval value in the `useEffect` hook inside `App.js`.

Feel free to explore and customize the application further to suit your needs!
