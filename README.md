# Ecommerce-application-follow-along

Key Features of the Project:

In this project, I will be building an E-Commerce app using the MERN stack (MongoDB, Express.js, React.js, Node.js). Here is what I will be learning and working on:

REST API Creation: I will learn how to build scalable APIs to manage users, products, and orders, and get hands-on experience with backend development.

User Authentication: I will implement secure login and registration for users, which is a crucial part of any app that handles sensitive data.

Database Schema Design: I will explore MongoDB to design data models that are efficient and scalable for an e-commerce platform.

Backend Development: I will set up a server with Node.js and Express.js to handle requests, API routes, and interact with the database.

Frontend with React: I will use React to build dynamic, user-friendly interfaces, like product lists and shopping carts.

<hr>

## Milestone 2: 

Key Achievements
1. Project Structure:
Organized the project into frontend and backend directories for better maintainability.
Backend set up with Node.js to handle server-side logic, and the frontend set up with React to build the user interface.
2. React Frontend Setup:
Initialized a React app to manage the UI, allowing the e-commerce platform to be interactive.
3. Node.js Backend Setup:
Configured a basic Node.js server to lay the foundation for upcoming API integrations and user authentication.
4. Tailwind CSS Configuration:
Integrated Tailwind CSS for utility-first, responsive styling to enhance UI development speed.
5. Login Page Development:
Designed and built a functional Login Page with form validation and styling using Tailwind.

<hr>

## Milestone 3: 

In this milestone, we focused on building the foundation for the backend of our e-commerce application. The key objectives were to set up a server, connect it to a database, and establish a solid folder structure to keep our code organized.

Backend Folder Structure: We created a structured hierarchy for organizing backend code. This includes dedicated folders for routes, controllers, models, and middleware. This structure will make it easier to scale the project as more features are added in future milestones.

Server Setup: We initialized a Node.js server using the Express framework. The server is now configured to handle API requests, and it listens on a designated port for incoming requests.

Database Connection: We integrated MongoDB into the project to store and manage data. The server is now connected to MongoDB, enabling efficient data storage and retrieval.

Error Handling: Basic error-handling mechanisms were added to ensure that the server can respond with clear error messages for better debugging and user feedback.

<hr>

## Milestone 4: 

In Milestone 4, we focused on enhancing the backend by creating a User Model, setting up a User Controller, and enabling file uploads using Multer. These features are key to handling user data and media effectively in the e-commerce app.

User Model: We created a User Model, which defines how user data is stored in the database. This includes fields such as name, email, and password. We used MongoDB schemas to design the structure and validation rules for each user.

User Controller: The User Controller was developed to manage user-related requests, such as creating a new user and retrieving user information. This controller acts as the manager that handles data processing and communication between the frontend and the database.

File Uploads with Multer: We integrated Multer to enable file uploads, allowing users to upload images (e.g., profile pictures). Multer manages the file storage and ensures that the files are saved securely in the backend.

<hr>

## Milestone 5: 

In Milestone 5, we focused on building the Sign-Up Page for the frontend, where users can register by entering their details. This page includes essential fields such as name, email, and password, providing a clean and user-friendly interface for registration.

Frontend UI Development: We designed the Sign-Up Page using HTML and CSS. The page was structured to be intuitive, ensuring users can easily input their data to create an account.

Form Validation: Form validation was added to ensure that user inputs are accurate and meet the required format. For example, we validated the email format and enforced a minimum password length to enhance security. This step helps avoid errors and ensures only valid data is submitted to the backend.

UI/UX Enhancements: The design is simple yet effective, allowing users to smoothly enter their details. We focused on making the form clean and responsive, ensuring it works across devices.

<hr>

## Milestone 6: 

In this milestone, we focused on building the foundation for the backend of our e-commerce application. The key objectives were to set up a server, connect it to a database, and establish a solid folder structure to keep our code organized.

Backend Folder Structure: We created a structured hierarchy for organizing backend code. This includes dedicated folders for routes, controllers, models, and middleware. This structure will make it easier to scale the project as more features are added in future milestones.

Server Setup: We initialized a Node.js server using the Express framework. The server is now configured to handle API requests, and it listens on a designated port for incoming requests.

Database Connection: We integrated MongoDB into the project to store and manage data. The server is now connected to MongoDB, enabling efficient data storage and retrieval.

Error Handling: Basic error-handling mechanisms were added to ensure that the server can respond with clear error messages for better debugging and user feedback.

<hr>

## Milestone 7: Login Endpoint 📝

Create a login endpoint to authenticate users. Users provide their email/username and password. The backend compares the entered password (hashed with bcrypt) to the stored password. If valid, a JWT token is generated and returned for subsequent requests.

Dependencies: bcryptjs, jsonwebtoken.

Test via POST /api/auth/login with email and password in the request body.

Response: Success with a token, or error for invalid credentials.

<hr>

 ## Milestone 8: Product Card Component 🌟

In this milestone, we focus on creating a *reusable product card component* for your e-commerce app. The goal is to showcase product details (e.g., name, image, price) in a visually appealing way, making it easy for users to browse products.

#### Steps Completed:
1. *Card Component*: Designed a reusable card that accepts product details as props.
2. *Homepage Layout*: Implemented a grid/flexbox layout to display multiple cards neatly.
3. *Dynamic Rendering*: Used array mapping to dynamically render cards for each product.

#### Next Steps:
In the next milestone, we’ll add features like filtering and sorting. Keep up the great work! 🚀

### Submission:
- Push your code to GitHub and ensure the repository is public.
- Update README with your progress and share the link.

<hr>

# Milestone 9: Product Form Creation

In this milestone, I created a frontend form for inputting product details, including multiple images. This form captures essential product information such as title, description, price, and image files, and will eventually be saved to the database. This milestone helps to understand how to handle user inputs and manage media files in a web application. Additional features like admin access for product uploads were also explored.

<hr>

# Milestone 10: Product Schema & Endpoint Creation

In this milestone, I created a Mongoose schema to define the structure for storing product data in MongoDB. The schema includes fields like name, description, price, and image URL, with proper validation to ensure data integrity (e.g., required fields, correct data types). 

I also built a POST endpoint that receives product details, validates the input data, and stores it in the database. This ensures that only valid product information is saved, maintaining a clean and reliable database.

Additionally, I explored optional features like creating admin roles for restricted access to product uploads. This milestone strengthens the backend process of handling product data, making it ready for display on the frontend in future milestones.

<hr>

## Milestone 11

Welcome to Milestone 11! 🌟

In this milestone, we learned how to display products dynamically on the home page using data stored in MongoDB. We built an endpoint to fetch all the products and a frontend function to display them using a product card component.

<hr>

# Milestone 12 - My Products Page

Welcome to Milestone 12! 🌟

In this milestone, we will build a "My Products" page that will display all the products added by a specific user. We will write an endpoint to filter products based on the user's email and send that data to the frontend. The data will be fetched dynamically and displayed using the Product Card component created earlier.

<hr>

# Milestone 13: Product Editing Functionality

## Overview 🌟

In this milestone, we focus on implementing functionality to allow users to edit the details of previously uploaded products. This includes creating a backend endpoint to update existing data in MongoDB and modifying the frontend to auto-fill the form with existing product details, giving the user the option to edit and save the new data.

<hr>

## Milestone 14 - Adding Product Deletion Functionality

In this milestone, we focus on implementing functionality to allow users to delete the details of previously uploaded products.

<hr>

## Milestone 15: Navbar Component Integration

In this milestone, we'll create and integrate a reusable Navbar component across all screens for smooth navigation.

#### Key Tasks:
- Create a Navbar with links to:
  - Home
  - My Products
  - Add Product
  - Cart
- Make the Navbar responsive.
- Add the Navbar to all pages for easy navigation.

This milestone teaches how to build and reuse a responsive Navbar for seamless navigation.

<hr>

## Milestone 16: Product Info Page

In this milestone, we will create a page to display product details, choose quantity, and add to the cart.

#### Key Tasks:
- Create a page to display product data.
- Add a quantity selector.
- Implement an "Add to Cart" button.

This milestone focuses on building a functional product info page for users.

<hr>

### Milestone 17: Cart Functionality

Overview:-

This milestone involves adding a cart feature to the user schema and implementing an endpoint to store product details in the cart.

Changes Made:

1. Cart Schema:

    1. Added a Cart schema to store products associated with the user.
    2. Each product contains a productId (referencing the Product model) and quantity.

2. Endpoint for Adding Products to Cart:

    1. Created a POST endpoint /api/cart/add to receive product details (e.g., product ID and quantity).
    2. The product details are stored in the cart associated with the user in the database.

<hr>

### Milestone 18: Cart Functionality Update

Overview:-

In this milestone, we have added two key backend endpoints to handle cart functionalities:

    1. Adding products to the cart via a POST request.
    2. Fetching all products inside a user's cart using their email.

<hr>

### Milestone 19: Cart Page with Quantity Update

✅ Create a Cart Page that displays products inside the cart using the endpoint built in Milestone 18.

✅ Implement Quantity Controls for each product, allowing users to increase or decrease quantity using + and - buttons.

✅ Build Backend Endpoints to update product quantity in the cart.

✅ Update the README with a short guide on using the new API endpoints.

<hr>

### Milestone 20: User Profile & Data Sharing

✅ Create a Backend Endpoint to send all user data via email.

✅ Develop a Profile Page in the frontend to display user details.

✅ Display Profile Photo, Name, Email, and Addresses on the profile page.

✅ Ensure Secure Data Handling while fetching and sending user information.

<hr>

### Milestone 21📝
1. Created address form frontend page
2. Created an state that will store input address
3. when we click on add address in profile it should navigate to this form page.
 
 <hr>

### Milestone 22📝
1. Created an endpoint that will receive the address from address form in frontend
2. Added the address to the address array inside user 

<hr>

### Milestone 23 🎯

In this milestone:

✅ Add a "Place Order" button inside the cart.

✅ Create a "Select Address" page to display all saved addresses and allow users to choose a delivery address.

✅ Write a Mongoose schema to store order details.
<hr>

### Milestone 24 🎯

In this milestone:


✅ Create an Order Confirmation page.

<hr>

### Milestone 25 📝

- An API endpoint was created to receive product details, user email, and address.
- The user ID is retrieved using the provided email.
- Separate orders are stored for each product with the same address in the MongoDB `orders` collection.
- The implementation follows the existing order schema and ensures data integrity.

<hr>

### Milestone 26 📝

- An API endpoint was created to receive the user's email.
- The user ID is retrieved using the provided email.
- Using the retrieved `_id`, all orders associated with the user are fetched.
- The response contains all orders belonging to the user.




