## About
Guess the number is a mini project made in React Native. It follows Max Schwarzmueller's React Native Course and it consists of a game where you enter a number.
After that, the computer tries to guess the number you chose. After every time the computer made a guess, you need to give it hints wether the guess is higher or lower than the chosen number.


<p align="center">
  <img src="https://github.com/Vladimir-Ciuculescu/guess-number/assets/97725392/a8b7a85f-b963-4b67-b98f-c7226a445d28" width="300" height="600" >
  <img src="https://github.com/Vladimir-Ciuculescu/guess-number/assets/97725392/60781ccb-f08d-4c61-9755-f7419dc82fe1" width="300" height="600">
 </p>

Screenshot with the start game of the screen. One button is used to reset the input value and the other one is used to confirm the entered number. The number input accepts only values between 1 and 99

<p align="center">
  <img src="https://github.com/Vladimir-Ciuculescu/guess-number/assets/97725392/4ac93399-6a57-4616-b18c-0f96823b8425" width="300" height="600" >
  <img src="https://github.com/Vladimir-Ciuculescu/guess-number/assets/97725392/657913ad-ccdb-491f-aa35-d6318ee08b00" width="300" height="600">
 </p>

After the number is confirmed, it takes the user to the game screen, where it shows the random number chosen by the computer. The user must give hints to the computer, telling it if the current guess is higher or lower than the number chosen. If you try to fool the computer, an alert is displayed. 

<p align="center">
 <img src="https://github.com/Vladimir-Ciuculescu/guess-number/assets/97725392/c0bcbf37-42c9-48bd-a354-ac2700fee7f0" width="300" height="600">
 </p>

Finally, if the computer guessed the chosen number, the game is over. The game over screen shows how many rounds it took the computer to guess the number and it even displays the history of its guesses.

## Setup
To setup this project, clone the repo and run: 

```
npm install
// OR
yarn
```

After that, to start the project run:

```
npm start
// OR
expo start
```
