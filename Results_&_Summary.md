## Test Coverage

### Authentication (Login)
- Successful login using environment variables
- Validation of login API response using `cy.intercept`
- Error handling for invalid credentials


### Practice Form (Data-Driven)
- Form submission using multiple users from a fixture
- Validation of success modal after submission


### Web Tables (CRUD Operations)
- Create a new user
- Search for the created user
- Validate presence in the table
- Delete the user
- Validate removal from the table

---

## Test Design Decisions

Some important decisions made during implementation:

- Environment variables are accessed via a helper (`getEnv`) instead of directly using `Cypress.env`, improving maintainability
- API validation is included in UI tests where relevant
- Fixtures are used to support data-driven testing without duplicating test logic
- Page Objects centralize selectors and actions, improving readability and reuse
- Cypress built-in retry mechanism is used

---

## Reusability and Utilities

To keep the codebase clean and scalable:

- Page Objects encapsulate page interactions (e.g., `LoginPage`, `FormPage`, `WebTablesPage`)
- Reusable methods like `login()` and `fillForm()` reduce duplication
- Fixtures allow easy expansion of test data without modifying test logic

---

## Test Results

- Total tests: 5  
- Passed: XX  
- Failed: XX  

Artifacts generated during execution:

- Screenshots: `cypress/screenshots`
- Videos: `cypress/videos`

---

## Known Issues / Flakiness

Some instability may occur due to:

- Dynamic rendering of elements in the DemoQA application
- Timing inconsistencies after form submission or table updates

To mitigate this:

- Assertions rely on Cypress retry behavior
- Page interactions are encapsulated to avoid duplication and timing issues

---

## Defect Report

A defect identified during testing is documented in:

`DEFECTS.md`

It includes:

- Steps to reproduce
- Expected vs actual behavior
- Severity assessment

---

## CI/CD and Improvements

With more time, I would extend this project with:

- CI integration (e.g., GitHub Actions)
- Parallel execution
- Tag-based test suites (smoke, regression, auth)
- Improved reporting (Mochawesome or Allure)

---

## What I Would Do With More Time

- Add more negative scenarios for forms and tables
- Introduce API-only test coverage (Postman)
- Improve test data management strategy
- Add cross-browser execution
- Refine test tagging strategy for better suite organization

---

## Summary

This project reflects a practical approach to test automation, focusing on clarity, reuse, and reliability.

Instead of maximizing the number of tests, I prioritized implementing a small set of meaningful scenarios, including UI and API validation, data-driven testing, and end-to-end CRUD operations.

The result is a test suite that is easy to maintain and extend, while still providing strong coverage of core application behavior.
