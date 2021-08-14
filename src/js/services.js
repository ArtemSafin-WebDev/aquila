import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function services() {
    const elements = Array.from(document.querySelectorAll('.js-services'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.services__card'));

        cards.forEach(card => {
            ScrollTrigger.matchMedia({
                '(min-width: 641px)': () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=90',
                            end: 'top center',
                            scrub: true,
                            markers: false
                        }
                    });

                    tl.from(card, {
                        autoAlpha: 0,
                        duration: 0.5
                    });
                }
            });
        });
    });
}
