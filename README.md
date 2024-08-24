# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Features

- **User Metrics Overview**: 
  - Displays total users, premium users, subscriptions, active users, new registrations, and total received reports.

- **Data Visualization**: 
  - Integrates Recharts for visual representation of data, including a pie chart for gender distribution.

- **Modern UI Components**: 
  - Utilizes Material-UI for a consistent and professional look and feel across the dashboard.

- **State Management**: 
  - Implemented using Redux Toolkit for efficient state management across the application.

- **Fast Build and Development**: 
  - Powered by Vite for a fast and optimized development experience.

- **Iconography**: 
  - Includes React Icons for easy integration and use of icons throughout the dashboard.

## Project Structure

- **src/**: Contains the main source code for the dashboard.
  - **components/**: Reusable React components.
  - **features/**: Redux Toolkit slices and related logic.
  - **assets/**: Images, icons, and other static assets.
  - **App.js**: The main application component.
  - **index.js**: Entry point of the application.
- **public/**: Contains the public assets and HTML template.
- **README.md**: Project documentation.

set up 
bash
>>npm create vite@latest dashboard --template react
>>>cd dashboard
>>>>cd dashboard
>>>>>npm install
>>>>>>npm run dev

TO add the dependencies
>>npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
>>> npm install @reduxjs/toolkit react-redux
>>>>npm install recharts
>>>>>npm install react-router-dom
>>>>>npm install react-icons 

## Importence
## Data Visualization Components

This project utilizes Recharts for robust and interactive data visualization. Below are the key chart components used:

- **AreaChart**: 
  - Used to represent quantitative data visually. It shows the progression of a dataset over time or other continuous data, displaying areas under the curve for different series in the data.
  
- **PieChart**: 
  - Ideal for representing parts of a whole, the PieChart displays data as slices of a pie. Each slice's size is proportional to its value, making it easy to compare different categories visually.
  
- **BarChart**: 
  - Useful for comparing different groups or tracking changes over time, the BarChart displays data with rectangular bars. Each bar's length or height corresponds to the data values, facilitating straightforward comparison across different categories.

## Styling 
## Material-UI Components

This project leverages Material-UI to provide a consistent, responsive, and professional UI design. Below is an overview of the key Material-UI components utilized:

- **Grid**: 
  - Used extensively for layout management. The Grid component helps create a flexible grid-based layout system that adjusts to different screen sizes, ensuring that the dashboard is responsive and well-structured.

- **Typography**: 
  - This component is used for managing the text styles across the application. It provides a variety of options to style headings, body text, captions, etc., maintaining consistency in the text formatting.

- **Box**: 
  - The Box component is a versatile wrapper that acts as a container for other elements. It is used to control padding, margin, and other layout properties, enabling fine-grained control over spacing and alignment.

- **Paper**: 
  - Used to create surfaces that elevate elements off the page. The Paper component provides a visual distinction between different sections or widgets in the dashboard, making it easier for users to focus on specific content areas.

- **Table**: 
  - The Table component is used to display tabular data in an organized and easily readable format. It supports features like sorting, pagination, and styling, making it suitable for displaying complex data sets clearly.

These Material-UI components help maintain a cohesive design language throughout the application, enhancing usability and visual appeal.

