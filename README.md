# Recipe Manager

## Description:
Recipe Manager is a web application designed to help users discover, save, and manage their favorite recipes. With Recipe Manager, users can browse a collection of recipes, view detailed recipe instructions, add new recipes, edit existing ones, and delete recipes. The application utilizes React Router for navigation and json-server to create a RESTful API for backend data persistence.

## Components:
1. **App:** The main component that renders other components and sets up routing.
2. **Navbar:** A navigation bar component that allows users to navigate between different routes.
3. **RecipeList:** Component to display a list of recipes.
4. **RecipeDetail:** Component to display detailed information about a recipe.
5. **RecipeForm:** Component for adding or editing recipes.
6. **Search:** Component for searching for recipes
7. **Vegetarian Option:** Component to display a Vegetarian Dishes.
8. **Popular Option:** Component to display a Popular food selections.
9. **Category Icons:** Component to display a catergory icons including European, American, Asian, Middle Eastern.

## Routes:
1. **/recipes:** Displays a list of all recipes.
2. **/recipes/:id:** Displays detailed information about a specific recipe.
3. **/recipes/add:** Allows users to add a new recipe.
4. **/recipes/:id/edit:** Allows users to edit an existing recipe.

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