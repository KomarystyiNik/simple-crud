# Simple CRUD application with API implementation
(React.js and Typescript)
The major functionality of the application:
1. List of all items
2. Creation of new item
3. View details of the selected item
4. Update specific item
5. Delete an item

For this test, we will use a dummy API provided by https://jsonplaceholder.typicode.com/. All
relevant information you can find on https://jsonplaceholder.typicode.com/guide/.

List of APIs that you will need for this test:
1. Listing all items - GET - https://jsonplaceholder.typicode.com/posts
2. Create a new item - POST - https://jsonplaceholder.typicode.com/posts
3. Item description - GET - https://jsonplaceholder.typicode.com/posts/${id}
4. Update item - PUT - https://jsonplaceholder.typicode.com/posts/${id}
5.  Delete item - DELETE - https://jsonplaceholder.typicode.com/posts/${id}

The application needs to have three pages/routes, a home, create, and one for item details.
The home page needs to display a list of items provided by API (1.) and it should have a create
button in the header. Clicking on create, the user should be redirected to create the page, with
the form which he can create a new item from it. The form should contain a title and
description (body) inputs. Clicking on the save button should create a new item and redirect
the user to the home page.

The second part is, that when the user clicks on the specified item from the home page list, it
should be redirected to the details page and the router should look something like /details/1.
On the details page, a new API should be called (3.) which will return data for a specific item
that needs to be displayed inside a form. That page should also contain two buttons/icons one
for update and the second for delete. The update should update the item using API (4.) with
provided data from the form. The delete button should remove the item using API (5.) and when
the item is removed, the user needs to be redirected to the home page.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
