
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#377dff',
        textColor: '#141718',
        lightGrey: '#6C7275',
        green: '#38cb89',
        lightBlue: '#E8ECEF',
        lightBlue2: '#F3F5F7',
        lightGrey2: '#B1B5C3'
      },
      fontSize: {
         '22': '22px',
         '28': '28px',
        '34': '34px',
        '54': '54px'
      },
      borderColor: {
        primary: '#377dff',
        textColor: '#141718',
        lightGrey: '#6C7275',
         lightBlue2: '#F3F5F7'
      }
    }
  }
}

// Swiper Initialization
const swiper = new Swiper(".productSwiper", {
  slidesPerView: 4.5, // Default number of slides visible
  spaceBetween: 20, // Default space between slides
  loop: true, // Enable looping
  grabCursor: true, // Enable grab cursor on hover
  navigation: {
    nextEl: ".swiper-button-next", // Target next arrow
    prevEl: ".swiper-button-prev", // Target previous arrow
  },
  pagination: false,
  // Responsive Breakpoints
  breakpoints: {
    // When window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  },
});



      // Initialize Swiper for Thumbnails
const swiperThumbs = new Swiper(".mySwiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 3,

});

// Initialize Swiper for Main Slider with Arrows
const swiperMain = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next", // Target next arrow
    prevEl: ".swiper-button-prev", // Target previous arrow
  },
  thumbs: {
    swiper: swiperThumbs, // Connect to thumbnail Swiper
  },
});


// Swiper Initialization
const brandsSwiper = new Swiper(".brands-slider", {
  slidesPerView: 6, // Default number of slides visible
  spaceBetween: 10, // Default space between slides
  loop: true, // Enable looping
  grabCursor: true, // Enable grab cursor on hover
  navigation: {
    nextEl: ".swiper-button-next", // Target next arrow
    prevEl: ".swiper-button-prev", // Target previous arrow
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   // Responsive Breakpoints
   breakpoints: {
    // When window width is >= 320px
    320: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2.7,
      spaceBetween: 15,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
     // When window width is >= 1180
     1180: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

const menu = document.getElementById("menu-div");
const toggleDiv = document.getElementById("toggleDiv");

menu.addEventListener("click", () => {
  // Toggle the 'hidden' class on click
  toggleDiv.classList.toggle("visible");
  menu.classList.toggle('active');
});

const cart = document.getElementById("cart-button");
const sidebar = document.getElementById("cartSlider");
const bodyClass = document.querySelector("body");

cart.addEventListener("click", () => {
  // Toggle the 'hidden' class on click
  bodyClass.classList.toggle("modal-open");
  sidebar.classList.toggle("visible");
});
sidebar.addEventListener("click", () => {
  // Toggle the 'hidden' class on click

  sidebar.classList.toggle("visible");
  bodyClass.classList.toggle("modal-open");
});

// bodyClass.addEventListener("click" , ()=>{
//   bodyClass.classList.toggle("modal-open");
// })


