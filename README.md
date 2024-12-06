# Form Builder MERN App with Tailwind CSS

easyformbuilder.netlify.app

Welcome to the **Form Builder MERN App!** This repository contains the source code for a powerful and user-friendly form builder application built using the **MERN Stack (MongoDB, Express, React, Node.js)** along with **Tailwind CSS** for styling. This project provides users with a seamless experience to create, edit, preview, and fill forms featuring three specific question types: Categorize, Cloze, and Comprehension.

## Table of Contents
- Features
- Tech Stack
- Installation
- Usage

## Features:
- Form Editor UI: Intuitive user interface to create and edit forms.
- Add and customize three question types:
- Categorize: Allows users to categorize items into groups.
- Cloze: Fill-in-the-blank style questions.
- Comprehension: Questions based on reading passages.
- Add images to questions.(Only works in local host)
- Include a header image for the form. (Only works in local host)
- Form Preview and Fill Functionality
- Generate a preview/fill link for the created form.
- Users can fill in forms via the link, and responses are saved in the backend.
- Database Integration
- Save all form data (questions, images, user responses) into MongoDB using robust schemas.

## Tech Stack:
### Frontend:
- React.js: Component-based UI development.
- Tailwind CSS: For responsive and modern styling.
- React Hook Form: Manage form state and validation.
- Zod: Schema validation for form inputs.
- React Router: Navigation and routing.
- DND Kit: Drag-and-drop functionality for rearranging questions.
- Tanstack Query: Efficient data fetching and state management.
- Tanstack Table: Displaying tabular data.
- Tiptap: Rich text editor for creating question content.
- React Dropzone: Easy file upload.
- React Easy Crop: Cropping images for header and questions.
- Zustand: State management for form editor.

### Backend:
- Node.js: JavaScript runtime environment.
- Express.js: Backend framework for API development.
- Nodemailer: Sending email notifications.
- Multer: File handling middleware for uploading images.
- JWT: Authentication with JSON Web Tokens.

### Database:
- MongoDB: NoSQL database for storing forms, questions, and responses.
- Mongoose: ODM for MongoDB schemas.

## Installation:
Ensure you have the following installed on your system: Node.js and MongoDB
### Steps:
        ```bash
        git clone https://github.com/sreyangshu05/form-builder.git  
        cd form-builder
        cd backend  
        npm install  
        cd ../frontend  
        npm install

      PORT=5000  
       MONGO_URI=your-mongodb-connection-string  
     JWT_SECRET=your-secret-key  
     SMTP_EMAIL=your-email@example.com  
     SMTP_PASSWORD=your-email-password  
     cd backend  
     npm run dev  
     cd ../frontend  
     npm start  
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage:
- Navigate to the Form Editor.
- Add questions of type Categorize, Cloze, or Comprehension using the UI.
- Upload images for questions or a header image.
- Save the form to generate a preview link.
- Open the generated preview link to view the form.
- Users can fill in the form and submit responses.
- Responses are securely saved in the backend database.

