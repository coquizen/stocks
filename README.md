# Fantasy Stock Trading

## Summary

Develop a simple stock trading application request stock quotes and allows the enduser to buy and sell stocks. This assignment will be completed in stages.

## Details of Implementation

- That lists information about a set of quotes
    - Provide the ability for the user to buy x amounts of each particular stock
    - Provide the ability to sell x amounts of particular stock (if they have it in their portfolio)
    - A button that refreshes stock information
- Displays the user's available balance
- Displays the user's stock portfolio with each stock's purchased price as well as the difference between purchase price and current price.

## Setup

1. Clone this repository: `git clone https://github.com/CaninoDev/stocks`
2. In your favorite IDE, open the resulting folder.
3. run `$ npm install`
3. In a terminal window, run `node server,js`. This will serve as the backend for this project.
4. Complete the following stage:

### Stage 1.1

class component: 
    - fetches quotes information when it mounts using the component's lifecycle function `componentDidMount()` and calls `fetch()`. The resulting data should be stored in the component's state
    - render each stock information using stateless components

#### Notes
The endpoint for retrieving stock data is `localhost:5000/api/index`. Research into the `fetch()` and how to call it [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Stage 1.2

class component:
    - store's the user's available balance in state. Their starting balance should be $100,000.
    - implement transactional functions that take in values that will add and subtract from their balance
    - render their balance information using a stateless component

### Stage 1.3

class component:
    - store the user's stock portfolio in state. Assume that their stock portfolio contains the entire index as provided in your quotes component.
    - implement a sell function that divests their portfolio for a specific stock. Don't worry about updating your balance to reflect transaction at the moment.
    - render each stock in the portfolio that displays the purchase date and price.

### Stage 1.4

Use `App.js` as your starting point. It should render the class components above.

## Analysis
After you have completed Stage 1, take a look at the application as a whole. Take what you know about state, props, and `.bind(this)` and consider how you would attempt to connect these stateful components. What would the resulting architecture look like? 
