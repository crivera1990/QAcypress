# Cypress.io

### Pros?
* Quick and easy to get setup and running e2e tests. Can get a test running in a couple mins
* Huge documentation support
* Time travel: Cypress takes snapshots as your tests run
* Debugging:  Readable errors and stack traces make debugging easier
* Automatic waiting: Automatically waits for commands and assertions before moving on
* Spies, stubs, and clocks: Verify and control the behavior of functions, server responses, or timers
* Network Traffic Control: Control, stub, and test edge cases without involving the server
* Screenshots and videos: View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI
* Cross browser Testing: Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally

### What are its limitations?
* No support for multi tabs - But I have read there are hacks around this if we ever needed
* No safari or IE support
* Have to pay to be able to run tests in parallel (Cypress Cloud)

### To run the code, clone or download the files from repo and then:
- run `npx cypress open` to open the app to run in browser
- run `npx cypress run` to run the tests headless
- Further documentation on install/running can be found: https://docs.cypress.io/guides/getting-started/installing-cypress 

### CI/CD with Azure 
I have found numerous write ups on documenting the process to hook cypress tests into azure pipelines. These would run headless and output test results inside the pipeliens
- https://www.lambdatest.com/blog/run-cypress-tests-in-azure-devops-pipeline/
- https://kailash-pathak.medium.com/how-to-setup-and-run-cypress-test-cases-in-azure-devops-pipeline-b179df86261


### Goal for POC

Scenario #1: Do a locator search

A consumer is looking to find a dealer located near them to get information about a product

**Expected Results**

* A consumer is able to load a locator page
* A consumer inputs a valid locator search value and initiates the search
* The locator results page loads with dealer listings 
* The locator results page loads a map with map pins on the locator results page
* Consumer is able to navigate to dealer site
