# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://github.com/Briancarlo24/Tip-Calculator-App.git)
- Live Site URL: [Add live site URL here](https://briancarlo24.github.io/Tip-Calculator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS] - CSS LIBRARY
- Vanilla Javascript

### What I learned

I learned about grid-column-template for arranging button groups. I also learned about eventlisterner 'change' in js everytime I input something.

I learned how to optimize reusable code by creating a function that I can use over and over again.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```scss
input[type="text"] {
  color: $vdcyan;
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.5;

  &:focus::placeholder {
    color: transparent;
  }
}
```

```js
function calculateTip(percentage, bill) {
  tip = bill * percentage;
  return tip.toFixed(2);
}

function perPerson(currentTip) {
  const numberOfPeople = document.querySelector(".numOfPeople-input").value;

  if (numberOfPeople < 1) {
    document.querySelector(".numOfPeople").classList.add("message");
    return `0.00`;
  } else if (isNaN(numberOfPeople)) {
    document.querySelector(".numOfPeople").classList.add("message");
  } else {
    document.querySelector(".numOfPeople").classList.remove("message");
    amountPerPerson = currentTip / numberOfPeople;
    return amountPerPerson.toFixed(2);
  }
}

function display(finaltip, bill) {
  if (
    document
      .querySelector(".bill-input")
      .classList.contains("bill-input-border")
  ) {
    document.querySelector(".bill-input").classList.remove("bill-input-border");
  }
  btnReset.disabled = false;
  btnReset.classList.add("button-active");
  currentTip = calculateTip(finaltip, bill);

  tipAmount.innerHTML = `$${currentTip}`;
  total.innerHTML = `$${perPerson(currentTip)}`;
}
};
```

### Continued development

I would use the things that I have learned here to my future projects. I am trying to learn as much as I can and finding the best and optimal way to structure my code.

### Useful resources

- [Example resource 1](https://www.stackoverflow.com) - This helped me find answers to my questions related to JS and SCSS
- [Example resource 2](https://www.w3cschools.com) - This helped me with the designs for the buttons and adding functionality to it. Also on how to use 'change' eventlisterner.

## Author

- Website - [Brian Carlo Birondo](https://github.com/Briancarlo24)
- Frontend Mentor - [@Briancarlo24](https://www.frontendmentor.io/profile/Briancarlo24)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
