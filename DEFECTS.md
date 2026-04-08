# Defect Reporting

## Title
Login succeeds with empty credentials

---


## Steps to Reproduce
1. Navigate to `/login`
2. Leave the username and password fields empty
3. Click on the "Login" button

---

## Expected Result
The system should block the login attempt and display validation messages indicating that the fields are required.

---

## Actual Result
The user is successfully logged into the system without providing any credentials.

---

## Severity
High  
This defect affects a critical functionality, allowing unauthorized access to the system.

---

## Priority
High  
This issue should be fixed immediately because it represents a major security risk.

---

## Supporting Evidence
- Screenshot: `/evidence/login-empty-credentials.png`
- API Response: `POST /login` returned status 200 OK with empty credentials
- Test case: `login.cy.js`
- Automation: Detected during Cypress test execution
