import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function intro() {
    const elements = Array.from(document.querySelectorAll('.js-intro'));

    elements.forEach(element => {
        const image = element.querySelector('.intro__image');

        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top top+=40',
                        end: 'bottom top',
                        scrub: true,
                        markers: false
                    }
                });

                tl.to(image, {
                    yPercent: 25,
                    duration: 0.5
                });
            }
        });
    });
}
