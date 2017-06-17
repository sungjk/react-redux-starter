# React Redux Observable

Get started with React, Redux, and Redux-Observable.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`              |Start the development server at `localhost:8080`|
|`compile`            |Builds the application to ./dist|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|

## Project Structure

```
.
├── dist                     # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── config                   # Configuration with details specific to your web application
└── src                      # Application source code
    ├── index.html           # Main HTML page container for app
    ├── index.jsx            # Application bootstrap and rendering
    ├── store.js             # Create and instrument redux store
    ├── routes.jsx           # Main route definitions and async split points
    ├── actions              # Payloads of information that send data from your application to your store
    ├── actionTypes          # Type of your actions
    ├── components           # Global Reusable Components
    ├── containers           # Global Reusable Container Components
    ├── epics                # An Epic is the core primitive of redux-observable
    ├── middleware           # A third-party extension point
    ├── reducers             # Specify how the application's state changes in response
    └── styles               # Application-wide styles (generally settings)
```
