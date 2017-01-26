# CoffeeShop App

## Overview
This application seeks to serve coffee to customers via a web platform.
When completed the app will allow customers to order one or more beverages within the app, via a web platform using Angular JS.

The application uses mock data to display a list of beverages and lets the user choose between them.  It also allows a user to select toppings for their beverage.  

## User Stories
 - a Customer can pick any of the beverages they choose.
 - a Customer can only pick two toppings for their beverage
 - When a customer chooses a beverage with available toppings for that beverage, the customer should see the total amount due for that order
 - Customers can place their order (optionally) using an API call to a node.js backend.

## Constraints
 - Tea can only be ordered with Mint, Ginger or Honey
 - Coffee drinks may not be topped with mint, but may be topped with Ginger or Honey

## Objectives
 - complete all user stories
 - account for constraints
 - include test cases
 - create documentation for how to run app


## Note

 - Testing has not yet been implemented.
 - This app was created using the Angular telephone tutorial.  Details for installing dependencies and running application below, taken directly from the docs (with some ommissions of unused folders and assets from that project)


## Etc.
"### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run it whenever you like.
[...]
### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application running.


### Prerequisites

#### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


### Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the application server by fetching static JSON files.
- Read the _Development_ section at the end to familiarize yourself with running and developing an Angular application.



The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and [Protractor][protractor]. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run it whenever you like.

#### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application  running.

#### Unit Testing

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers, others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just change any of your these files.

#### End-to-End Testing

We recommend using [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is set up to run the tests on Chrome directly. If you want to run against other browsers, you must  modify the configuration at `e2e-tests/protractor-conf.js`.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running 
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].


### Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  core/                  --> all the source code of the core module (stuff used throughout the app)
    checkmark/...        --> files for the `checkmark` filter, including JS source code, specs
    phone/...            --> files for the `core.phone` submodule, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
HTML templates, specs
  phones/...             --> static JSON files with phone data (used to fake a backend API)
  1
  app.config.js          --> app-wide configuration of Angular services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the Angular Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

bower.json               --> Bower specific metadata, including client-side dependencies
karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
```
