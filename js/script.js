
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
  slidesPerView: 4.5, // Number of slides visible
  spaceBetween: 20, // Space between slides
  loop: true, // Enable looping
  grabCursor: true, // Enable grab cursor on hover
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Show only the first three dots
      if (index < 3) {
        return `<span class="${className}"></span>`;
      }
      return ""; // No dot for other slides
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

