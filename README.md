# TNC Calculator App

This is the TNC Version of the Cool Climate Carbon Calculator. Created during the Fall of 2021 at UC Berkeley. 

                                Containier.js
                              /       |       \   ResultsChart
                             /        |        \     /|\ 
                            /         |         \     | (toggles)
            CarbonCalculator.js   Intro.js    CCgraph.js
                  |  
                  |  
                  |
                  |
              CalcPages  ------- Contain (Custom Assets)
                     
## Get Started

To start working on the app:

1. Clone this repository
2. Clone the repository `calculator-api` from [CoolClimateNetwork/calculator-api](https://github.com/CoolClimateNetwork/calculator-api/)
   1. If you find this repository not found, ask Chris to add you to the organization.
   2. Make sure this `calculator-api` package is installed in the same folder as this `tnc` package. This means you would have a parent directory probably called `coolclimate`, and two directories `calculator-api` and `tnc` inside the `coolclimate` directory.
3. `cd` into `coolclimate-api` directory and run `npm install` => `npm run build`
4. `cd` into `tnc` directory and run `npm install`
5. Now you can run `npm run start` to start serving the frontend

## Relavent Links

Web-Mock-Up:
https://projects.invisionapp.com/share/6TY2U0GUX2F#/425168867_CC_-_Get_Started

Mobile-Mock-Up:
https://www.figma.com/file/3qYdQMz3HDH7YVNizWql6S/Carbon-Calculator

Cool-Climate-API:
https://api-central.berkeley.edu/api/11

React-Hooks:
https://reactjs.org/docs/hooks-intro.html

## Structure

### Containier.scss

SCSS file for all of Calculator files. File is split up accordingly to section.

### Containier.js

Container.js contains the Container Function which renders a React Component that will hold all of the the TNC Calculator global states as well as the API function calls. This Component is IMPORTANT as any react hooks that change the global state should be passed downstream from here.
For instance:
`const [inputSize, setInputSize] = useState("3");`
Sets a react hook `inputSize` and it's function to change it as `setInputSize` with a default value of 3. 
`inputSize` is a value that will be passed into the API function call, and shouldn't have to be referenced anywhere else. 
`setInputSize` on the other hand should be passed downstream to the Carbon Calculator and later on to the corrosponding Page, which in this case is Started.js
Any change of InputSize will now be refelcted in the global state despite the change occuring in a child, and have the correct API parameters called when we want updated results.


#### CarbonCalculator.js

CarbonCalculator.js is the wrapper that loads all the different pages to dispaly for the user.

#### CCgraph.js

Graph that is shown to the right of the Carbon Calculator when going through the process of entering items into the calculator.

#### Intro.js

Renders the text that is shown at teh start of starting the calculator.

#### ResultsChart

This is the full-size chart that is only shown when you want to toggle it. Overlay is presented when viewing it and makes CarbonCalculator unclickable.

#### CalcPages

Holds all the different pages that the CarbonCalculator renders.

#### Custom Assets

This holds all the custom UI components such as dropdown menu and slider bars that deviate from their orginal representation

## TO-DO

### Bug Fixes:
There are a few notable bugs right now in the app. Most notable odf which include

1: When pressing the next button. The API function is triggered, but an error occurs in parsing, causing the react app to crash.

2: The Animation timing is off. 

3:... Feel free to add more as you find them.


### Responsiveness:

Currently the Web-App lacks resonsiveness, in terms of mobile and tablet scalability.
The UI guide for both can be found in this figma file:
https://www.figma.com/file/3qYdQMz3HDH7YVNizWql6S/Carbon-Calculator
Feel free to add any scss classes or depedencies that'll get the job done.

### Simple-Advanced Switchbars:

This is a feature that still needs to be integrated.
The Switch component functions correctly but needs to toggle other page with different API parameters.


### Results Page:

The Results Page also needs to be integrated, and the UI design can be found here:
https://projects.invisionapp.com/share/6TY2U0GUX2F#/425168867_CC_-_Get_Started


### Finishing API-Integration:

Currently only the Started Page has the API integrated within it. The rest of the pages need their API integrated so that whenever a user switches out of a page, the API gets an update, and corrosponding states are updated accordingly. 


### Creating UI Limits/Restrictions:

Some UI Components need limits and Syntax shown:
eg. Vehicles should only be limited to 4 max vehicles.
Input Fields Shouls have a character limit.
Input Fields should also check for valid parameters.

### I-Frame Wrapper

Need to wrap whole app under an Iframe, and have it able to export as so.


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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
