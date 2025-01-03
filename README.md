# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Certainly! Here's a sample `README.md` for your `react-aria-calendar` repository:

---

# React Aria Calendar

## Overview

The **React Aria Calendar** is a calendar component built with React. It supports functionalities include:
- **Displays the current month**
- **Dynamically applies a colour** based on the companyID parameter 

## Step-by-Step Guide: Embedding the Calendar into Your Website

### Prerequisites
- A React application (You can set one up using Create React App if needed).
- Node.js and npm/yarn installed.

### Installation

1. **Install the Package**  
   You can install the `react-aria-calendar` component via npm or yarn:

   ```bash
   npm install react-aria-calendar
   ```

   or

   ```bash
   yarn add react-aria-calendar
   ```

2. **Import the Component**  
   In the React component where you want to use the calendar, import it as follows:

   ```jsx
   import ReactAriaCalendar from 'react-aria-calendar';
   ```

### Usage Example

Here's an example of how to use the `ReactAriaCalendar` component in your application:

```jsx
import React from 'react';
import ReactAriaCalendar from 'react-aria-calendar';

const MyCalendarComponent = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>My Accessible Calendar</h2>
      <ReactAriaCalendar 
        initialDate={new Date()} // Set the initial date
        onDateChange={(date) => console.log("Selected date:", date)} // Handle date change
        locale="en-US" // Set locale (optional)
        selectedDates={['2025-01-15', '2025-01-20']} // Pre-select dates (optional)
        rangeSelection={true} // Enable range selection (optional)
      />
    </div>
  );
};

export default MyCalendarComponent;
```

### Props

The `ReactAriaCalendar` component accepts the following props:

- `initialDate`: The initial date displayed when the calendar is first rendered (default is the current date).
- `onDateChange`: A callback function that fires whenever a date is selected or changed.
- `selectedDates`: An array of pre-selected dates.
- `locale`: Locale for displaying the calendar (default is `"en-US"`).
- `rangeSelection`: If `true`, allows selecting a date range (default is `false`).
- `minDate` / `maxDate`: Optional dates to limit the calendar's date range.
- `style`: Allows inline styling to customize the calendar's appearance.

### Styling

You can easily customize the appearance of the calendar by passing in custom CSS or overriding specific styles. For example:

```css
.react-aria-calendar {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
}

.react-aria-calendar button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.react-aria-calendar button.selected {
  background-color: #4CAF50;
  color: white;
}
```

### Accessibility Considerations

This calendar component adheres to ARIA best practices, ensuring that it can be fully accessed using screen readers and keyboard navigation. Here are a few points to note:
- Users can navigate the calendar using arrow keys (`←`, `→`, `↑`, `↓`) to move between dates.
- The selected date is clearly announced for screen reader users.
- Buttons for navigating months and years are clearly labeled.

### Embedding in Other Websites

To embed the calendar into a non-React website or web app:

1. **Build the React Component**:  
   Run `npm run build` or `yarn build` to create the production build of your React app.

2. **Host the Build Files**:  
   After the build process completes, the files will be located in the `build/` directory. Upload these files to your web server or host them on a CDN.

3. **Embed the Component via iframe or as a Script**:
   - Using an iframe: You can embed the React component directly using an iframe:
     ```html
     <iframe src="path-to-your-calendar-app/index.html" width="600" height="400"></iframe>
     ```
   - Using script tags: If you want to include the calendar in a more integrated way, you can export the React component as a standalone script (using tools like `react-snap` or `single-spa`) and then link it in your HTML.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed React Aria Calendar</title>
  <link rel="stylesheet" href="path-to-calendar-styles.css">
</head>
<body>
  <div id="calendar-root"></div>
  
  <script src="path-to-your-react-calendar-bundle.js"></script>
  <script>
    // Mount the React Calendar component to the DOM
    ReactDOM.render(React.createElement(YourCalendarComponent), document.getElementById('calendar-root'));
  </script>
</body>
</html>
```

### Conclusion

The **React Aria Calendar** component provides a robust and accessible calendar for your React-based applications, with a high level of customizability and ease of use. You can easily embed it into other websites and applications using standard web technologies like iframes or script tags.
