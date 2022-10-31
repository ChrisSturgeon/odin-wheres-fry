# Where's Fry?

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Concepts and Ideas Learnt](#concepts-and-ideas-learnt)
- [Areas to Improve](#areas-to-improve)
- [Contact](#contact)

## Overview

The photo-tagging project from the _Javascript and the Backend_ module of [The Odin Project](https://www.theodinproject.com/). The aim was to create an app using React and Firebase in which users race against the clock to find and correctly identify characters from a _Where's Wally_ style photo to try and top a leaderboard stored on the backend.

Try the live project [here](https://chrissturgeon.github.io/odin-wheres-fry/) and view the project guidelines [here](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app).

![Front page screenshot](/wheres-fry/src/imgs/screenshot.jpg 'Front Page')

<!-- TODO: Add a screenshot of the live project.
    1. Link to a 'live demo.'
    2. Describe your overall experience in a couple of sentences.
    3. List a few specific technical things that you learned or improved on.
    4. Share any other tips or guidance for others attempting this or something similar.
 -->

### Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Firebase - Firestore](https://firebase.google.com/)
- [Javascript](https://www.javascript.com/)
- HTML
- CSS

## Features

- Displays and records player times and names in the UI and Firebase's Firestore.
- Top and recent player scoreboards.
- Characters locations are stored in Firestore and players's guesses are validated against them.
- Responsive design for mobile and tablets.
- Expandable 'help' bar accessible during the game.

### Concepts and Ideas Learnt

- How to use **asynchronous functions** to read and store data with Firebase's Firestore.
- How to create a **timer** with Javascript, have it update in real-time, and use the value in elsewhere.
- Utilise CSS and Javascript to create a selection-box on top an image, and how to use **CSS filters** to darken the background.

### Areas to Improve

If I was to remake or improve this project I would:

- Add levels for players to find other characters, and have scoreboards for each, along with a cumulative time scoreboard.
- Choose a vertical image for more natural scrolling on mobile.
- Add markers on the image where incorrect guesses have been made.

## Contact

- sturgeon.chris@gmail.com
- [LinkedIn](https://www.linkedin.com/in/chris-sturgeon-36a74254/)
