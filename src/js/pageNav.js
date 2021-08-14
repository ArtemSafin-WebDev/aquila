import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function pageNav() {
    const pageNav = document.querySelector('.page-nav');

    if (!pageNav) return;

    const links = Array.from(document.querySelectorAll('.page-nav__link'));
    const services = document.querySelector('.services');

    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            ScrollTrigger.create({
                trigger: pageNav,
                start: () => `top top+=50px`,
                endTrigger: '.specialists',
                end: () => 'center center',
                pin: true,
                pinSpacing: false,
                markers: false,
               
                onLeave: () => {
                    document.body.classList.add('hide-nav');
                },
                onEnterBack: () => {
                    document.body.classList.remove('hide-nav');
                },
                onToggle: () => {
                    ScrollTrigger.refresh();
                },
            });

            if (services) {
                links.forEach(link => {
                    ScrollTrigger.create({
                        trigger: services,
                        start: () => `top top+=${link.getBoundingClientRect().top + link.offsetHeight / 2}`,
                        end: () => `bottom top+=${link.getBoundingClientRect().top + link.offsetHeight / 2}`,
                        markers: false,
                        onToggle: ({ isActive }) => {
                            if (isActive) {
                                link.classList.add('white');
                            } else {
                                link.classList.remove('white');
                            }
                        }
                    });
                }); 
            }
        }
    });

}
