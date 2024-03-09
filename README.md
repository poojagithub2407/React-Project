# Image Carousel React App

This React application fetches images from the top posts of the "aww" subreddit on Reddit and displays them in a carousel. Users can navigate through the images using left and right buttons, and the carousel automatically rotates through the images at regular intervals.

## Features

- Fetches images from the "aww" subreddit on Reddit using the Reddit API.
- Implements a simple image carousel functionality with left and right navigation buttons.
- Automatically rotates through images in a loop with a specified interval.

## FAQ Component

The FAQ component renders a list of FAQ items using the provided data. Each FAQ item is represented by the FAQItem component.

### Props

- `faqDatas`: An array of objects containing FAQ data, where each object has `question` and `answer` properties.

## FAQItem Component

The FAQItem component represents an individual FAQ item. It manages the state to toggle the display of the answer when the question is clicked.

### Props

- `faqData`: An object containing the FAQ data with `question` and `answer` properties.
- `index`: The index of the FAQ item in the list.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Dependencies

- React: JavaScript library for building the user interface.
- React Hooks: Used for managing state and side effects in functional components.

## File Structure

- `App.js`: Main component containing the image carousel functionality.
- `App.css`: Stylesheet for the application.
- `README.md`: Documentation file providing information about the application.

## Important Notes

- The application relies on the Reddit API to fetch images from the "aww" subreddit. A stable internet connection is required for proper functionality.
- Adjust the interval for automatic image rotation by modifying the interval value in the `useEffect` hook inside `App.js`.
