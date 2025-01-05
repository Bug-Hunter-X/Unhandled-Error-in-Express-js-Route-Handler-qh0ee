# Express.js Route Handler Error

This repository demonstrates a common error in Express.js route handlers:  the lack of error handling for invalid input, specifically in this case, missing handling for invalid user IDs.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version.

## Bug Description

The `/users/:id` route in `bug.js` attempts to access user data based on the `id` parameter.  However, it lacks error handling for situations where the `id` is invalid (e.g., not a number, user not found).

## Solution

The `bugSolution.js` file demonstrates proper error handling. It checks if the `id` is valid and handles the case where a user with the given ID doesn't exist.