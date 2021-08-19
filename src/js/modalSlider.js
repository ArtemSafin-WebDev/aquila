import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function modalSlider() {
    const elements = Array.from(document.querySelectorAll('.js-modal-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            watchOverflow: true,
            loop: false,
            centeredSlides: false,
            centeredSlidesBounds: true,
            threshold: 5,
            loopedSlider: 6,
            navigation: {
                nextEl: element.querySelector('.modal__slider-button--next'),
                prevEl: element.querySelector('.modal__slider-button--prev')
            }
        });
    });
}
