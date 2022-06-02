# Cypress cucumber Demo Automation App

Repository for Demo suites created using Cypress written with Cucumber rule set <Given - And - Then>

## Scenarios Overview

- Visitor user can create an account
- Registered user can login
- Logged in user can log out
- Visitor user can verify if product exists and add it to cart
- Registered user can verify if product exists and add it to cart
- Logged in user can add a product to cart and complete order process

## Prerequisites

- Node.js 12 or 14 and above (https://nodejs.org/en/download/)\
  Since the packages and dependencies are downloaded and used with NPM (Node Package Manager), it is necessary to install Node.js prior to using any Cypress features.

## Installation

1. Clone the repository with `git clone https://github.com/mamikuck/FiveDemoWebShop`
2. Navigate to the root of the repository
3. Install Cypress and other project dependencies with the terminal command `npm install`
4. Start Cypress or execute tests as described in the "Run Config" section of the readme

command for cucumber support

```
npm install --save-dev cypress-cucumber-preprocessor

```

## Reporter

By default the project is using the mochawesome reporter. After running the tests the report will be genarated in the `cypress/report` folder.
On failed tests, a screenshot and video will be attached to the report.

## Structure

- tests are defined in the `cypress/integration/FunctionalTests/DEMOApp` folder
- test steps are defined in cucumber feature files
- global commands can be found in `cypress/support/commands.js`
- environment-specific configuration can be found in `cypress/config/env`
- test data can be found in `cypress/fixtures`

====================================

         Test Execution

====================================

## Run Config

1.  To run tests in browser view with log files use the command: 'npx cypress open'
2.  To run tests in headless mode use the command: 'npx cypress run'
3.  To run tests by tag in feauture file use the command: 'npx cypress-tags run -e TAGS="@login" --headless --browser chrome'

Genereting HTML Report after test execution:

```

npm run create:html:report

```

Clear json reports after html report merge:

```

npm run clean:reports

```

To run all tests in browser view

- click on: "All.features"

====================================

         Test Data

====================================

## Test data to fillout

Use the folowing file which can be user to test new user

1. Go to `cypress/fixture/testData.json` - add desired test data:

- a) "UserNAME": " XXX " - here new user can be defined with format e.g. "Petar987"
- b) "Password": " XXX " - here new password can be defined with format e.g. "Pass1234!"

2. Go to `cypress/fixture/testProducts.json` - add desired test data:

   1. Product category

- a) "Category1": " XXX ", - use the product category name, if the category is not present on site, the test will fail
- b) "Category2": " XXX ", - use the product category name, if the category is not present on site, the test will fail
- c) "Category3": " XXX ", - use the product category name, if the category is not present on site, the test will fail

2.  Product name

- a) "Product1": " XXX ", - use the product name, if the product name is not present on site under same category, the test will fail
- b) "Product2": " XXX ", - use the product name, if the product name is not present on site under same category, the test will fail
- c) "Product3": " XXX ", - use the product name, if the product name is not present on site under same category, the test will fail

3.  Order Detail

- a) "UserNameOrder": " XXX ", - enter the user name/surname for order
- b) "UserCountry": " XXX ", - enter the user country for order
- c) "UserCity": " XXX ", - enter the user city for order
- d) "UserCreditCardNumber": " XXX ", - enter the user credit card number for order
- e) "Month": " XXX ", - enter the month for order
- f) "Year": " XXX " - enter the year for order
