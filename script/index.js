new fullpage('#fullpage', {

  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
  menu: '#myMenu'
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 1500,
    pauseOnMouseEnter: true,
  },
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
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

let imagenActual = null;
let webActual = null;
let githubActual = null;
let ancorgActual = null;
let ancorwActual = null
const a = 0;
const imagen = document.querySelectorAll(".redes");
const div = document.querySelectorAll('.swiper-slide');
const github = document.querySelectorAll(".github")
const web = document.querySelectorAll(".web")
const ancorg = document.querySelectorAll(".github-a")
const ancorw = document.querySelectorAll(".web-a")



imagen.forEach((imagen, indice) => {
  imagen.addEventListener('click', () => {

    if (imagenActual) {
      imagenActual.style.filter = 'none';
    }
    if (webActual) {
      ancorgActual.classList.add("d-none")
      ancorwActual.classList.add("d-none")
    }
    imagen.style.filter = 'blur(5px)';
    imagenActual = imagen;
    
    


    github[indice].style.opacity = '1'
    ancorg[indice].classList.remove("d-none")
    web[indice].style.opacity = '1'
    ancorw[indice].classList.remove("d-none")
    webActual = web[indice]
    githubActual = github[indice]
    ancorgActual = ancorg[indice]
    ancorwActual = ancorw[indice]
  })

});