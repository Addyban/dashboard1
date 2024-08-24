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
