# React Assignment: Counter, User Form, and Rich Text Editor

This project is a React-based web application developed as part of a recruitment assignment. It demonstrates the use of functional components with hooks, routing with React Router, and smooth animations with React Spring. The application consists of three main components:

- **Counter Component**
- **User Data Form**
- **Rich Text Editor**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Component Structure & State Management](#component-structure--state-management)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [References](#references)

---

## Project Overview

This project implements a simple web application where users can:

- **Interact with a Counter:** Increment, decrement, and reset the counter while the background color changes dynamically.
- **Submit User Data:** Fill out a form that collects name, address, email, and phone, then saves the data with an auto-generated user ID.
- **Edit and Save Text:** Use a rich text editor with formatting options (bold, italic, underline, lists) and persist content to local storage.

Navigation is handled by React Router, and smooth fade-in animations for each component are implemented using React Spring.

---

## Features

- **Counter Component:**
  - Increment, decrement, and reset functions.
  - Dynamic background color based on the count.
  - Fade-in animation on component mount.

- **User Data Form:**
  - Controlled inputs for name, address, email, and phone.
  - Auto-generated user ID.
  - Data saved to local storage.
  - Warning on unsaved changes when attempting to leave the page.

- **Rich Text Editor:**
  - Text editing with formatting options.
  - Content saved and loaded from local storage.
  - Fade-in animation on component mount.

- **Routing:**
  - Navigation between components using React Router.

- **Animations:**
  - Smooth fade-in effects using React Spring.

---

## Technologies Used

- **React & TypeScript:** For building UI components.
- **React Router DOM:** For client-side routing.
- **React Spring (@react-spring/web):** For smooth animations.
- **React Quill:** For the rich text editor.
- **Local Storage:** For data persistence.

---

## Component Structure & State Management

### Component Structure

- **Counter.tsx:**  
  A functional component that uses the `useState` hook to manage the counter value. It includes three buttons (Increment, Decrement, Reset) and changes the background color based on the count. The component is wrapped in an animated div for a fade-in effect.

- **UserForm.tsx:**  
  A functional component with controlled inputs (managed by `useState`) for collecting user details. It tracks unsaved changes and warns the user before leaving the page. On form submission, it generates a unique user ID (using the current timestamp) and saves the data to local storage.

- **RichTextEditor.tsx:**  
  This component integrates React Quill as a rich text editor. It loads saved content from local storage when mounted and allows users to format text and save it. A fade-in animation is also applied.

### State Management

- **Local State with Hooks:**  
  Each component uses `useState` for managing its internal state (e.g., counter value, form fields, editor content).

- **Side Effects with useEffect:**  
  - **UserForm:** Monitors unsaved changes and warns the user on page unload.
  - **RichTextEditor:** Loads saved content from local storage on mount.

- **Data Persistence:**  
  The application uses the browser's local storage to save and retrieve user data and rich text content.

---

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Install Dependencies:**

    ```bash
    npm install
    ```
3. **Start the Development Server:**

    ```bash
    npm start
    ```
The application should be available at http://localhost:3000.

## Usage
**Navigation:**
Use the navigation links at the top to switch between the Counter, User Data Form, and Rich Text Editor.

**Counter:**
Click the buttons to increment, decrement, or reset the count. Observe the background color change and fade-in animation on load.

**User Data Form:**
Enter your details and submit the form to save your data. A warning will appear if you try to navigate away with unsaved changes.

**Rich Text Editor:**
Edit and format text, then save your content. The editor will load saved content when revisited.

## References
**React Router Documentation:** React Router

**React Spring Documentation:** React Spring (@react-spring/web)

**React Quill Documentation:** React Quill

**YouTube Video for GitHub Upload:** [How to Upload a Project to GitHub](https://www.youtube.com/watch?v=7wzuievFjrk)
