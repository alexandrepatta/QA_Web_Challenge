# Web QA Automation Challenge – Cypress

## Project Overview

This project demonstrates an automated testing approach using Cypress for the application https://demoqa.com/.

Given the time constraint, I focused on a few key areas of the application that represent common and meaningful user interactions. The goal was not to maximize coverage, but to validate critical flows with reliable and maintainable tests.

The main areas covered include:
- Authentication (login)
- Form submission
- Web table interactions (CRUD operations)

---

## Test Strategy

The test strategy focuses on validating core user flows with a balance between functional coverage and execution time.

The following types of scenarios were included:
- Happy paths (valid user behavior)
- Negative scenarios (invalid credentials)
- API validation alongside UI actions
- Data-driven testing for broader input coverage

I intentionally did not include:
- Visual validation
- Performance testing
- Cross-browser execution

This allowed me to keep the suite focused and stable within the proposed timeframe.

---

## Framework Architecture

The project is structured to support scalability and maintainability:

cypress/
e2e/
pages/
fixtures/
support/
utils/


Key design choices:
- Page Object Model to encapsulate selectors and actions
- Centralized environment handling via a custom `getEnv()` helper
- Fixtures used for data-driven scenarios
- Custom commands and utilities to reduce duplication

---

## Setup & Installation

### Prerequisites
- Node.js
- npm or yarn

### Installation

```bash
npm install

```

- Install Cypress plugin [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep)

```bash
npm install --save-dev @cypress/grep

```
- Install dotenv

```bash
 npm install dotenv --save

 ```
- Rename ".env.example" file to ".env"
---

### Running Tests

- Run all tests in headless mode:

```bash
npx cypress run

```

Run tests in interactive mode:

```bash
npx cypress open

```

Run specific tests by tag (if configured):

```bash
npx cypress run --expose grepTags="@regression"

```


