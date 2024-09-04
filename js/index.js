//DOM load event
window.addEventListener("DOMContentLoaded", () => {
    const cube = document.querySelector(".cube"),
      imageButtons = document.querySelector(".image-buttons");
    let cubeImageClass = cube.classList[1];
  
    //Add click event listener to image buttons container
    imageButtons.addEventListener("click", e => {
      //Get node type and class value of clicked element
      const targetNode = e.target.nodeName,
        targetClass = e.target.className;
  
      //Check if image input has been clicked and isn't the currently shown image
      if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
        console.log(`Show Image: ${targetClass.charAt(11)}`);
  
        //Replace previous cube image class with new class
        cube.classList.replace(cubeImageClass, targetClass);
  
        //Update cube image class variable with new class
        cubeImageClass = targetClass;
      }
    });
  });

  

// gallery

class Slider {
    debugger;
    constructor(slider) {
        this.slider = slider;
        this.display = slider.querySelector(".image-display");
        this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
        this.prevButton = slider.querySelector(".prev-button");
        this.nextButton = slider.querySelector(".next-button");
        this.sliderNavigation = slider.querySelector(".slider-navigation");
        this.currentSlideIndex = 0;
        this.preloadedImages = {};

        this.initialize();
    }

    initialize() {
        this.setupSlider();
        this.preloadImages();
        this.eventListeners();
    }

    setupSlider() {
        this.showSlide(this.currentSlideIndex);
    }

    showSlide(index) {
        this.currentSlideIndex = index;
        const navButtonImg = this.navButtons[
            this.currentSlideIndex
        ].querySelector("img");
        if (navButtonImg) {
            const imgClone = navButtonImg.cloneNode();
            this.display.replaceChildren(imgClone);
        }
        this.updateNavButtons();
    }

    updateNavButtons() {
        this.navButtons.forEach((button, buttonIndex) => {
            const isSelected = buttonIndex === this.currentSlideIndex;
            button.setAttribute("aria-selected", isSelected);
            // if (isSelected) button.focus();
        });
    }

    preloadImages() {
        this.navButtons.forEach((button) => {
            const imgElement = button.querySelector("img");
            if (imgElement) {
                const imgSrc = imgElement.src;
                if (!this.preloadedImages[imgSrc]) {
                    this.preloadedImages[imgSrc] = new Image();
                    this.preloadedImages[imgSrc].src = imgSrc;
                }
            }
        });
    }

    eventListeners() {
        // document.addEventListener("keydown", (event) => {
        //     this.handleAction(event.key);
        // });

        this.sliderNavigation.addEventListener("click", (event) => {
            const targetButton = event.target.closest(".nav-button");
            const index = targetButton
                ? this.navButtons.indexOf(targetButton)
                : -1;
            if (index !== -1) {
                this.showSlide(index);
            }
        });

        this.prevButton.addEventListener("click", () =>
            this.handleAction("prev")
        );
        this.nextButton.addEventListener("click", () =>
            this.handleAction("next")
        );
    }

    handleAction(action) {
        if (action === "Home") {
            this.currentSlideIndex = 0;
        } else if (action === "End") {
            this.currentSlideIndex = this.navButtons.length - 1;
        } else if (action === "ArrowRight" || action === "next") {
            this.currentSlideIndex =
                (this.currentSlideIndex + 1) % this.navButtons.length;
        } else if (action === "ArrowLeft" || action === "prev") {
            this.currentSlideIndex =
                (this.currentSlideIndex - 1 + this.navButtons.length) %
                this.navButtons.length;
        }

        this.showSlide(this.currentSlideIndex);
    }
}

const ImageSlider = new Slider(document.querySelector(".image-slider"));

// gallery

// popup code

$(document).ready(function () {
    setTimeout(function () {
       $('#exampleModal').modal('show')
    }, 3000)
  })
  
  // popup code
  

// for side menu open script

let navbarBackdrop = $('<div class="navbarBackdrop"></div>');
$('.navbar .navbar-toggler').on('click', function () {
  $('.navbar .navbar-collapse').addClass('show');
  $('.navbar').append(navbarBackdrop);
})

$('.navbar .navbar-collapse .close').on('click', function () {
  $('.navbar .navbar-collapse').removeClass('show');
  $(navbarBackdrop).remove();
})

$(document).on('click', function (e) {
  if ($(e.target).hasClass('navbarBackdrop')) {
    $(e.target).remove();
    $('.navbar .navbar-collapse').removeClass('show');
  }

  else if ($(e.target).hasClass('custom_nav_link')) {
    $(navbarBackdrop).remove();
    $('.navbar .navbar-collapse').removeClass('show');
  }
})

// for side menu open script

// for sticky header

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// for sticky header  