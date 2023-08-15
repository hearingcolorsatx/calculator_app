# Calculator App

This is a basic caclulator app written in JavaScript with some associated tests in Cucumber, Mocha, and Jest. The calculator itself has no UI (yet), and offers only the most basic calculator functions - addition, subtraction, multiplication, and division. It is setup as a Class - `class Calculator` - that can be imported into other files in this repository. Additional functions may eventually be added, but for now this repo is really intended to assist newcomers to testing and development using a simple, practical application. The main logic for the calculator looks like this:

  ```
  add(a, b) {
    this.result = a + b;
    return this.result
  }
  
  subtract(a, b) {
    this.result = a - b;
    return this.result
  }
  
  multiply(a, b) {
    this.result = a * b;
    return this.result
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = a / b;
    return this.result
  }
  ```

That's the bulk of the calculator logic, which can be found in `src/calculator.js` - simple enough for anyone with an Algebra level understanding of mathematics. In addition to this simple application and the accompanying tests, there is also a very basic local API setup using Express.js to work with this app. This guide will explain how to set everything up using the provided `package.json`, run the tests, and start the local API.

## Node.js and npm

First things first, do you have Node.js and npm installed on your machine? To check execute the following commands:

```
node --version
npm --version
```

The response should be the current version installed on your machine. If it is already installed, you can skip ahead to the `Getting Started` section of this README. If not, follow the instructions below for your operating system:

#### Setup node and npm on Linux

In RHEL, execute the following from the terminal:

```
sudo yum update
sudo yum install nodejs
```

In Ubuntu, execute the following from the terminal:

```
sudo apt-get update
sudo apt-get install nodejs npm
```

In Fedora, execute the following from the terminal:

`sudo dnf install nodejs npm`

#### Setup node and npm on MacOS

Homebrew is the recommended packet manager for MacOS. If it is not already installed on your machine, execute the following:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

Once that is installed, or if it was already installed, execute the following:

`brew install node`

#### Set up node and npm on Windows

Need to setup node and npm for development in Windows? Work through the following instructions:

1. Open PowerShell as Administrator and execute the following command:

  `Get-ExecutionPolicy`

  - If the output is `Restricted`, then execute:

  `Set-ExecutionPolicy AllSigned`

2. Say Yes, all if and when prompted whether you really want to do it.

3. At this point, if Chocolatey is already installed, skip to step 4. If it is not installed, executing the following to install it:

`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

4. Install `Node.js` and `npm`:

   ```
  choco install -y --force nodejs-lts 
  npm i -g npm
  ```

## Getting Started

To begin, clone this repository using `git clone git@github.com:hearingcolorsatx/calculator_app.git` and `cd` into the new directory with `cd calculator_app`. Now we can setup our environment. To install all the necessary dependencies for this project, simply execute `npm install`. This will install the following dependencies as shown in the `package.json`:

  ```
  "dependencies": {
    "chai": "^4.3.7",
    "cucumber": "^6.0.7",
    "express": "^4.18.2",
    "jest": "^29.6.2",
    "mocha": "^10.2.0"
  }
  ```

This should be enough to get started testing!

## Testing

To simplify executing the tests, the following scripts have been added to the `package.json`:

  ```
  "scripts": {
    "cucumber-test": "cucumber-js",
    "mocha-test": "mocha test",
    "jest-test": "jest test",
    "start": "node app.js"
  },
  ```

All that needs to be done from here, is to run the tests! However, not without a little explanation first to improve our undestanding of what is happening under the hood, so to speak.

### Cucumber

The `cucumber.js` file is in the root of this project, as required, and configures Cucumber to work with this project by specifying the location of the required `*.js` files. In this instance, the following locations are `'./features/step-definitions/*.js', './features/support/*.js'`. This project currently doesn't use any `support` files so the `support` folder is empty, but these files will typically contain shared support code, utilities, and setup/teardown logic for the tests.

#### Step Definitions

The `step-definitions` folder contain the step definitions in `calculator_test.js`, which are written to map the plain text steps in feature files to actual code that then executes the intended behavior during testing, for the defined scenarios. The `step-definitions` in this project can be broken down into the following:

1. Import Statements
  - `const { Given, When, Then } = require('cucumber');` imports the Given, When, and Then functions from the `cucumber` library, which define the steps in the feature files.
  
  - `const Calculator = require('../../src/calculator');` imports the Calculator class from the calculator app.
  
  - `const { expect } = require('chai');` imports the `expect` function from the `chai` library

2. Variables
  - The `let calculator;` variable will hold an instance of the Calculator class, allowing calculations to be performed in the steps.

  - The `let enteredNumbers = [];` array stores the numbers entered into the calculator during the test scenario.

3. Step Definitions
  - `Given('I have entered {int} into the calculator', function (number) { ... })` corresponds to the scenario step "Given I have entered {int} into the calculator" in the feature file so that when this step is encountered in a scenario, the provided number is stored in the `enteredNumbers` array, and a new instance of the `Calculator` class is created.
  
  - `When('I press add', function () { ... })` corresponds to the scenario step "When I press add" in the feature file so that when it retrieves the numbers specified from the `enteredNumbers` array, it adds them using the `calculator.add()` method. Similar `When` step definitions are present for subtracting, multiplying, and dividing.
  
  - `Then('the result should be {int} on the screen', function (expectedResult) { ... })` corresponds to the scenario step "Then the result should be {int} on the screen" in the feature file so that it retrieves the calculated result from the calculator and uses the `expect` function to assert that the result matches the expected value.

#### Feature File

The Cucumber feature file(s) can be found in the `features` folder, which is written in plain text using the Gherkin syntax. The `features` folder needs to be in the root of the project. Although there can be multiple feature files, there is only one in this project to test the basic functionality of the calculator app, `basic_math.feature`. The following breakdown aims to give a better understanding of how these tests are structured:

1. The feature describes what is being tested, essentially a summary of the test's purpose.

2. The scenarios are individual tests within the feature.

3. Each scenario consists of the following steps: Given, And, When, and Then.
  - Given sets up the initial state.
  - And adds additional context or actions to a scenario, and helps avoid repetitive phrasing.
  - When describes an action or event.
  - Then specifies the expected outcome.

The tests written in the feature file provide the step definitions with the information it needs to execute the intended behavior during testing. Now that we have a basic undestanding of how Cucumber is structured and operates, to run the Cucumber tests, simply execute the following command:

`npm run cucumber-test`

### Mocha and Jest

Mocha and Jest are very simlar syntactically. These tests create a suite of tests for the Calculator class with each `it` block representing an individual test case. The `expect` function is used to make assertions about the results of the calculator's operations. The tests ensure that the calculator's methods perform as expected, and they also verify error handling in the case of division by zero.

The Mocha tests in this project can be found in the `test/mocha` folder within `calculator.test.js`, and the Jest test in this project can be found in the `test/jest` folder within `calculator.test.js` which can be broken down as such:

1. Importing necessary modules
  - For Mocha, the following imports the Calculator class and the `expect` function from the `chai` library:

    ```
    const Calculator = require('../../src/calculator');
    const { expect } = require('chai');
    ```
    
  - For Jest, the following imports the Calculator class:

    `const Calculator = require('../../src/calculator');`

2. Define a suite of tests for the Calculator class
  - For Mocha and Jest, the following declares a variable to hold the calculator object:

    ```
    describe('Calculator', () => {
      let calculator; ... })
    ```

3. Create a new calculator instance
  - For Mocha and Jest, the following will create a new calculator instance before each test.

      ```
      beforeEach(() => {
        calculator = new Calculator();
      });
      ```

4. Test the calculator functionality
  - In Mocha and Jest, the following performs the addition operation using the calculator:

      ```
      it('should add two numbers', () => {
        const result = calculator.add(5, 3);
      ```

  - In Mocha, the following makes an assertion about the `result` to check if it is equal to the expected value `(8)`:

      `expect(result).to.equal(8);`

  - In Jest, the following makes an assertion about the `result` to check if it is equal to the expected value `(8)`:

      `expect(result).toBe(8);`

  - Similar logic is present for subtracting, multiplying, dividing, and dividing by 0. 

Now that we have a basic undestanding of how Mocha and Jest are structured and operate, to run the tests, simply execute the following commands:

```
npm run mocha-test test/mocha`
npm run jest-test`
```

#### Notes

1. When running Mocha alone, the location of the Mocha test(s) must be specified, otherwise you will receive the following error: `Error: No test files found`.

2. Running the Jest tests will also execute the Mocha tests.

## API Setup

A basic API has been added to this project for local testing using the lightweight server framework `Express.js`. API tests will eventually be added. The following breakdown explains how the API is setup: 


1. Import Modules: Import the necessary modules (express and Calculator) using the require function:

  ```
  const express = require('express');
  const Calculator = require('./src/calculator')
  ```

2. Create Express App: Create an instance of the Express application using express().

  `const app = express();`

3. Define Port: Specify the port number (3000) on which the server will listen for incoming requests.

  `const port = 3000;`

  - If port 3000 is currently used, specify any open port.

4. Create Calculator Instance: Create an instance of the Calculator class, which will be used to perform mathematical operations.

  `const calculator = new Calculator();`

5. Define 'add' Route: Set up a route for handling the 'add' operation. When a client sends a GET request to the '/add' endpoint, the server extracts values provided for 'a' and 'b' from the query parameters. The calculator.add(a, b) method is then used to perform the addition operation, and the result is sent back to the client as a JSON response.

  ```
  app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = calculator.add(a, b);
    res.json({ result });
    });
  ```

  - Similar routes have been setup for subtraction, multiplication, and division

6. Start Server: Start the server by calling the listen method on the Express app instance. The server will listen on the specified port (3000). When the server starts, a message will be logged to the console.

  ```
  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  });
  ```

And that is how this basic API is setup! To start the server, simply execute the following command:

  `npm start`

Now that the basic API is up and running locally. You can access it by making GET requests to the following URLs:

http://localhost:3000/add?a=5&b=3
http://localhost:3000/subtract?a=5&b=3
http://localhost:3000/multiply?a=5&b=3
http://localhost:3000/divide?a=81&b=9

From Visual Studio Code, you should be able to hold `Ctrl` and click any of the above links to open it in a browser, or you can simply copy and paste the addresses above into a browser window, and it will show the result given the intergers provided.