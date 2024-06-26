var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".swiper-uudai", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      840: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });