var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
  },
  navigation: {
      nextEl: '.banner-swiper-button-next',
      prevEl: '.banner-swiper-button-prev',
  },
});
