
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
menu.addEventListener('click', addMove);
menuIcon.addEventListener('click', addMove);

function addMove() {
    menuIcon.classList.toggle('move');
    menu.classList.toggle('active');
    notification.classList.remove('active');
}

// Notification

let notification = document.querySelector('.notification');
document.querySelector('#bell-icon').addEventListener('click', () => {

    notification.classList.toggle('active');
})

// Swiper Trending 

let swiperTrending = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay:{
        delay: 900,
        disableOnInteration : false,
    },
    breakpoints: {
        639: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Swiper New

let swiperNew = new Swiper(".new-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay:{
        delay: 900,
        disableOnInteration : false,
    },
    breakpoints: {
        639: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Custom Scroll Bar

window.onscroll = function (){moveScroll()};

function moveScroll(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('scroll_bar').style.width = scrolled + '%';
}