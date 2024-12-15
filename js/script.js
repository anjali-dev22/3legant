
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#377dff',
        textColor: '#141718',
        lightGrey: '#6C7275',
        secondary: '#38cb89',
        lightBlue: '#E8ECEF'
      },
      fontSize: {
         '22': '22px',
        '34': '34px'
      },
      borderColor: {
        primary: '#377dff',
        textColor: '#141718',
        lightGrey: '#6C7275',
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
