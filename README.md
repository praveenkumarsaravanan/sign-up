# Sign Up Service

## Published at https://praveenksaravanan.github.io/sign-up

This is a responsive web app for the Sign Up service, where a user can register for an imaginary application. It consists of Sign Up feature and supports internationalization(118n).

<br/>

## Technology Stack

* React 17
* Javascript
* HTML
* CSS
* React Testing

## To run this service in local / development environment

In the project directory, run:

### `npm install`

Installs all the dependencies that the project requires.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br/>

## To run your tests in local / development environment

In the project directory, run:

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br/>

## To prepare a production build

In the project directory, run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Sign Up app is ready to be deployed!

<br/>

## To deploy to Github Pages

[Step1 & Step2 are needed, to match the url requirments in the guide and this can be removed later
]
*Step 1:* Update package.json with homepage attribute as below
### `"homepage": "https://praveenksaravanan.github.io/sign-up"`

*Step 2:* Update index.js router with basename attribute. 
### `<Router basename={process.env.PUBLIC_URL} >`

*Step 3:* In the project directory, run:

### `npm run deploy`

Deploys the project in to Github pages and the build files are published to the `gh-pages` branch in the repo. 

Published site will be available at https://praveenksaravanan.github.io/sign-up 

<br/>

**Note:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).