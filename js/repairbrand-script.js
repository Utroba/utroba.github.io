
let slidesPerviewNum = 1.2;

new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: slidesPerviewNum,
    spaceBetween: 16,
});

// const brands = document.querySelectorAll('.brand-container__item');
const brandBtn = document.querySelector('.brand-container__btn');
const brandHeight = document.querySelector('.brand-container__list');
const brandClose = document.querySelector('.brand-container__btn-close');
let showAll = false

brandBtn.addEventListener('click', function () {
    if (!showAll) {
        brandHeight.style.height = 'auto';
        brandBtn.classList.add('brand-container__btn-close');
        brandBtn.textContent = 'Скрыть'
    } else {
        brandHeight.style.height = '160px';
        brandBtn.classList.remove('brand-container__btn-close');
        brandBtn.textContent = 'Показать всё'
    }

    showAll = !showAll
});

