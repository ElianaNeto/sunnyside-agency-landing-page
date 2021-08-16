# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](screenshot/web.png)

### Links

- Solution URL: [My solution ](https://www.frontendmentor.io/solutions/order-summary-component-zIgUK-v7E)
- Live Site URL: [Live site URL here](https://eliananeto.github.io/order-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow 
- [Javascrip](https://www.javascript.com/)

### What I learned

I learned to apply simple active state on menu 😅 🙃

```js
$(document).ready(function(){
    $('.menu-list ul li a').click(function() {
        $('.menu-list li a').removeClass("active");
        $(this).addClass("active");  
    });
});
```



## Author

- Frontend Mentor - [@ElianaNeto](https://www.frontendmentor.io/profile/ElianaNeto)
- Twitter - [@eliana\_\_neto](https://twitter.com/eliana__neto)
