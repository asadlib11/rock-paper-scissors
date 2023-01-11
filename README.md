# Rock Paper Scissors-ish 
A game made with React and typescript where you provide a set of rules to the modules and play vs computer or watch computer play against itself.

## Modules
1. Player vs Computer: takes one optional prop i.e. a rules object.
2. Computer vs Computer: also takes one optional prop i.e. a rules object.

### Rules object:
Rules object should contain all the needed outputs of inputs, e.g. There are three inputs by default in this game i.e. Rock, Paper and Scissors. Rock beats Scissors and is beaten by Paper so your rule object should have these two properties:
```
{
    "Rock" : "Scissors", // Rock beats paper
    "Paper" : "Rock"  // Paper beats rock
    "Scissors" : "Paper" // Scissors beat Paper
}
```

In this way you should provide all the outputs applying on any rule in order to get an output. If any output is missing game will give no result.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
