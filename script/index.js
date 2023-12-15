new fullpage('#fullpage', {
    
        
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'coverflow',
    loop: true,
    autoplay:{
      delay:1500,
      pauseOnMouseEnter:true,
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    breakpoints: {
      1024:{
        slidesPerView: 3,
      },
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      320: {
        slidesPerView: 1,
        autoplay:{
          delay:2500,
        },
      },
      // when window width is >= 640px
      
    },
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });