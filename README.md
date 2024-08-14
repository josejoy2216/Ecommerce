# BookStore - MERN Stack E-commerce Application

## Project Overview

BookStore is an e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to browse, view details, and purchase books. Additionally, it includes an admin panel where administrators can manage the collection of books, including adding, updating, and deleting book entries. Firebase is used for authentication to secure both user and admin access.

## Features

### User Features:
- **Browse Books**: Users can browse through a list of available books.
- **View Book Details**: Clicking on a book displays its detailed information.
- **Authentication**: Users can sign up and log in using Firebase authentication.

### Admin Features:
- **Admin Panel**: Admins can access a panel to manage the book inventory.
- **Add New Books**: Admins can upload new books, including details such as title, author, price, and description.
- **Edit Books**: Admins can update the details of existing books.
- **Delete Books**: Admins can remove books from the inventory.

## Technology Stack

- **Frontend**:
  - React: For building the user interface.
  - React Router DOM: For handling client-side routing.
  - Swiper: For creating interactive carousels.
  - FontAwesome & React Icons: For including icons throughout the UI.
  - NextUI: For styled React components.

- **Backend**:
  - Node.js: Server-side runtime.
  - Express.js: Web framework for Node.js.
  - MongoDB: NoSQL database for storing book data.

- **Authentication**:
  - Firebase: Used for user authentication.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bookstore.git

2. **Install dependencies:**
Navigate to the project directory and run:
    ```bash
    npm install

3. **Setup Firebase:**
    Create a Firebase project and enable authentication.
    Add your Firebase configuration to your project.

4. Run the application:
Start the development server:
    ```bash
    npm start

5. Admin Access:

Access the admin panel by navigating to /admin.
Ensure you have an admin account set up through Firebase.

Available Scripts
In the project directory, you can run:

npm start: Runs the app in the development mode.
npm build: Builds the app for production to the build folder.
npm test: Launches the test runner in the interactive watch mode.
npm eject: If you aren’t satisfied with the default configuration, you can eject it.
Folder Structure
/src: Contains all the React components and assets.
/public: Static assets such as images and index.html.
/backend: Server-side code, including Express setup and MongoDB models.


Dependencies
{
  "name": "myapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@nextui-org/card": "^2.0.31",
    "@nextui-org/react": "^2.4.2",
    "@react-icons/all-files": "^4.1.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^10.12.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-i": "^0.2.1",
    "react-icons": "^5.2.1",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "swiper": "^11.1.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

**Contributing**
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find any bugs or have suggestions for new features.