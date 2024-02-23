let searchForm =document.querySelector('.form-text');

document.querySelector('#menu-Search').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

let cart=document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
     searchForm.classList.remove('active');
    
    login.classList.remove('active');
    menu.classList.remove('active');
}   

let login=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    login.classList.toggle('active')
    searchForm.classList.remove('active');
    cart.classList.remove('active');

    menu.classList.remove('active');
}

let menu=document.querySelector('.nav');

document.querySelector('#menu-btn').onclick=()=>{
    menu.classList.toggle('active')
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
   
}

window.onscroll =()=>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableInteraction: false,
    },
    breakpoints: {
       0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableInteraction: false,
    },
    breakpoints: {
       0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

