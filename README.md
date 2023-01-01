# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/form-screenshot-mobile.jpg)
![](./images/form-screenshot-desktop.jpg)

### Links

- Solution URL: [Challenge solution](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)
- Live Site URL: [My solution](https://wtwilliams310.github.io/signup-form/)


### What I learned

This was my second project that needed form validation. This challenge pushed me to write functions in order to avoid repetative code in JS.

An example was the formMessage function that I used to avoid writing four addtional if..else statements for the each of the input validations:

```js
let formMessage = (id, index, message) => {
  if(id.value.trim() === "") {
  errorMsg[index].innerHTML = message;
  icon[index].style.opacity = "1";

  } else {
    errorMsg[index].innerHTML = "";
    icon[index].style.opacity = "0";
  } 
}  
```

## Author

- Frontend Mentor - [@wtwilliams310](https://www.frontendmentor.io/profile/wtwilliams310)


