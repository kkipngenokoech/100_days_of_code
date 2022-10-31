# TESTING

there are three tests we can do:

1. controller tests `tests/controller`
2. model tests
3. integration tests

## Controller tests

tests are found in the `tests` directory.

each tests for each of the actions, simply gets a URL and verifies that the result is a success.

`Let’s test the Home page by issuing a GET request to the Static Pages
home URL and then making sure we receive a ‘success’ status code in re-
sponse.”`

to run the tests:
`rails test`
