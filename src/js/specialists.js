import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function specialists() {
    const elements = Array.from(document.querySelectorAll('.js-specialists'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 45,
            watchOverflow: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            navigation: {
                nextEl: element.querySelector('.specialists__arrow--next'),
                prevEl: element.querySelector('.specialists__arrow--prev')
            }
        });
    });
}
