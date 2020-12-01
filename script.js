$('.promo__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});


$('.recall__wrap').slick({


    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }

    ]
});


$('.ourWork__wrap').slick({


    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }

    ]
});

let windows = document.querySelectorAll(".kinds__card");
for (let i = 0; i < 5; i += 1) {
    windows[i].addEventListener("mouseover", () => {
        windows[i].querySelector(".kinds-over").classList.remove("first_kinds");
    })
    windows[i].addEventListener("mouseout", () => {
        windows[i].querySelector(".kinds-over").classList.add("first_kinds");
    })
}
let burger = document.querySelector(".menu__media_item2");
let menu = document.querySelector(".menu__list");
burger.addEventListener("click", () => {
    menu.classList.toggle("menu__hide");



})