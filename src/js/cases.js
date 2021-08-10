import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function cases() {
    const elements = Array.from(document.querySelectorAll('.js-cases'));

    elements.forEach(element => {
        const secondCol = element.querySelector('.cases__col:nth-child(2)');

        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        markers: false
                    }
                });

                tl.from(secondCol, {
                    y: 90,
                    duration: 0.5
                });
            }
        });
    })
}