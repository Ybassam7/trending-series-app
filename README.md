
# Trending TV Shows Viewer

A sleek and responsive web application built with React that displays a curated list of the most popular TV shows trending today, powered by [The Movie Database (TMDB) API](https://www.themoviedb.org/).

### 🚀 [**View Live Demo**](https://trending-series-app.vercel.app/)
This project demonstrates modern frontend development practices, focusing on asynchronous data fetching from a live API. It includes robust state management to handle loading and error states gracefully, ensuring a smooth and reliable user experience. The entire application is built with reusable components and styled with modern CSS for a clean, professional finish.

## Core Concepts Practiced

This project served as a hands-on exercise to solidify fundamental concepts in React for handling asynchronous data.

-   **Asynchronous JavaScript**: Using `async/await` within the `getSeries` function to handle promises from the API request in a clean, readable way.
-   **API Integration with Axios**: Making `GET` requests to a third-party REST API, including the configuration of request headers for authorization, all within a `try...catch` block.
-   **State Management (`useState`)**: Managing multiple pieces of state to control the UI:
    -   `series`: Storing the array of TV shows fetched from the API.
    -   `isLoading`: A boolean to toggle the display of the full-screen loading spinner.
    -   `apiError`: Storing error messages to display to the user if the API call fails.
-   **Side Effects (`useEffect`)**: Using the `useEffect` hook with an empty dependency array (`[]`) to fetch data exactly once when the main component mounts.
-   **Conditional Rendering**: Using the logical `&&` operator to conditionally render UI elements. The loading spinner is shown when `isLoading` is true, and an error message appears if `apiError` contains a value.
-   **List Rendering & Keys**: Using the `.map()` method to iterate over the `series` array and render a `<Child />` component for each item, assigning a stable `key` for performance.
-   **Data Manipulation (`.filter`)**: Pre-processing the API response by using the `.filter()` method to remove any items with missing or invalid data, preventing potential crashes and improving UI reliability.

---

## ✨ Features

-   **Dynamic Data Fetching**: Fetches real-time trending TV show data from the TMDB API using Axios.
-   **Full-Screen Loader**: Displays a clean loading overlay while data is being retrieved to provide a smooth, uninterrupted user experience.
-   **Robust Error Handling**: Gracefully catches and displays API errors (e.g., invalid API key, network issues) to the user without crashing the app.
-   **Responsive Design**: A fully responsive card-based grid layout that looks great on all devices, from mobile phones to desktops.
-   **Data Filtering**: Intelligently filters out any incomplete or invalid data from the API to prevent broken UI elements.
-   **Modern UI/UX**: A visually appealing dark-mode interface with subtle hover animations and a clean, readable design.

---

## 🛠️ Tech Stack

-   **Framework/Library:** React.js
-   **HTTP Client:** Axios
-   **Styling:** CSS3 (with Flexbox, Grid, and Custom Properties)
-   **Build Tool:** Vite / Create React App

---