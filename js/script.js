//function to check mouse scroll event 
function MouseScroll(e, element) {
 let scrolling = 0;
 //if left right arrows are clicked else if mouse is scrolled how much is scrolled is etched by using mouse delta function
  if (typeof e === 'number') {
    scrolling = e;
  } else {
    if (e.deltaX !== 0) {
      scrolling = e.deltaX;
    } else {
      scrolling = e.deltaY;
    }
    e.preventDefault();
  }
  element.scrollLeft = element.scrollLeft-(scrolling);
}

window.onload = function() {
  var carousel = {};
  carousel.e = document.getElementById('section-videos-carousel');
  carousel.items = document.getElementById('carousel-items');
  carousel.leftScroll = document.getElementById('left-scroll-button');
  carousel.rightScroll = document.getElementById('right-scroll-button');

  carousel.items.addEventListener("mousewheel", handleMouse, true);
  carousel.items.addEventListener("scroll", scrollEvent);
  carousel.leftScroll.addEventListener("click", leftScrollClick);
  carousel.rightScroll.addEventListener("click", rightScrollClick);

  setLeftScrollOpacity();
  setRightScrollOpacity();
  //event handler functions for scroll, left click and right click
  function handleMouse(e) {
    MouseScroll(e, carousel.items);
  }

  function leftScrollClick() {
    MouseScroll(100, carousel.items);
  }

  function rightScrollClick() {
    MouseScroll(-100, carousel.items);
  }

  function scrollEvent(e) {
    setLeftScrollOpacity();
    setRightScrollOpacity();
  }
  //functions to check if scroll left of carousel-item is 0 and if it is set opacity 0.
  function setLeftScrollOpacity() {
    if (isScrolledAllLeft()) {
      carousel.leftScroll.style.opacity = 0;
    } else {
      carousel.leftScroll.style.opacity = 1;
    }
  }
  
  function isScrolledAllLeft() {
    if (carousel.items.scrollLeft === 0) {
      return true;
    } else {
      return false;
    }
  }
    // functions to check if scroll right of carousel-item is greater than offsetwidt 
    // and if it is set opacity 0 to right aright arrow.
  function isScrolledAllRight() {
    if (carousel.items.scrollWidth > carousel.items.offsetWidth) {
      if (carousel.items.scrollLeft + carousel.items.offsetWidth === carousel.items.scrollWidth) {
        return true;
      } 
    }else {
      return true;
    }   
    return false;
  }
  
  function setRightScrollOpacity() {
    if (isScrolledAllRight()){
        carousel.rightScroll.style.opacity = 0;
      } else {
        carousel.rightScroll.style.opacity = 1;
      }
  }
}