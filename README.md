# Recipe Manager

## Description:
Recipe Manager is a web application designed to help users discover, save, and manage their favorite recipes. With Recipe Manager, users can search from a collection of recipes, view detailed recipe instructions and select popular recipe cuisine. The application utilizes React Router for navigation and json-server to create a RESTful API for backend data persistence.

## Components:
1. **Home:** Component to display Home page
2. **Recipe:** Component to display detailed information about a recipe, instructions and ingredients
3. **Search:** Component for searching for recipes
4. **Searched:** Component for searched for recipes
5. **Vegetarian list:** Component to display a Vegetarian Dishes.
6. **Popular list:** Component to display a Popular food selections.
7. **Category Icons:** Component to display a catergory icons including European, American, Asian, Middle Eastern.
8. **Layout:** Component to display a button to allow user to move back to the top of the page

## Routes:
1. **/Home:** Displays a the home page of Popular and Vegetarian picks.
2. **/Recipes:** Displays detailed information about a specific recipe, ingredients and steps.
3. **/Cuisine:** Allows users to browse selected cusine recipes.
4. **/Search:** Allows users to search an existing recipe.

## RESTful API Endpoints:
- GET `/recipes`: Retrieves a list of all recipes.
- GET `/recipes/:id`: Retrieves detailed information about a specific recipe.
- POST `/recipes`: Adds a new recipe.
- PUT `/recipes/:id`: Updates an existing recipe.
- DELETE `/recipes/:id`: Deletes a recipe.

## Features:
- **Recipe Browsing:** Users can browse a collection of recipes and view detailed information about each recipe.
- **Recipe Management:** Users can add new recipes, edit existing ones, and delete recipes.
- **Responsive Design:** The application is designed to be responsive and accessible on various devices and screen sizes.
- **User-friendly Interface:** The user interface is intuitive and easy to navigate, with a navigation bar for seamless routing between different sections of the application.
- **Data Persistence:** Utilizes json-server to provide backend data persistence, ensuring that user data is saved and accessible across sessions.
- **Error Handling:** Implements error handling for cases like empty recipe lists or failed API requests to provide a smooth user experience.
- **Form Validation:** Uses controlled form/components for adding and editing recipes, with validation to ensure that user input is accurate and complete.

## Resources:
- **Recipes API:** https://api.spoonacular.com
- **React Icons:** https://react-icons.github.io/react-icons/