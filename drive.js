const accordions = document.querySelectorAll(".accordion-box");
const dropdownOne = document.querySelector(".dropdown");
const dropdownTwo = document.querySelector(".dropdown-2");
const postalInputOne = document.querySelector(".option-list-container");
const postalInputTwo = document.querySelector(".option-list-container-2");
const menuBtn = document.querySelector(".menu-btn");
const icon = menuBtn.querySelector("i");
const container = document.querySelector('.header-container');
const body = document.querySelector('body');
const swiper = new Swiper('.card-wrapper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {slidesPerView : 1},
        768: {slidesPerView: 2},
        1024: {slidesPerView : 3}
    },
  });


accordions.forEach((acc) =>{
  acc.addEventListener("click", () =>{
    accordions.forEach((other) =>{
      if(other !== acc){
        other.classList.remove("active")
      }
    })
    acc.classList.toggle("active")
  })
})

dropdownOne.addEventListener("click", () =>{
   dropdownOne.classList.toggle('active');
})

dropdownTwo.addEventListener("click", () =>{
  dropdownTwo.classList.toggle('active');
})

document.addEventListener("click", (e) =>{
  if(!dropdownOne.contains(e.target)){
      dropdownOne.classList.remove("active");
  }
})

document.addEventListener("click", (e) =>{
  if(!dropdownTwo.contains(e.target)){
      dropdownTwo.classList.remove("active");
  }
});

postalInputOne.addEventListener("click", (e) => e.stopImmediatePropagation())
postalInputTwo.addEventListener("click", (e) => e.stopImmediatePropagation())

menuBtn.addEventListener("click", () =>{
   container.classList.toggle("visible");
   body.classList.toggle("menu-open")
  
   if(icon.classList.contains("fa-bars")){
    icon.classList.replace("fa-bars", "fa-times");
   }
   
   else if(icon.classList.contains("fa-times")){
    icon.classList.replace("fa-times", "fa-bars");
   }
});