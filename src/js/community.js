import gsap from 'gsap';
import { debounce } from 'lodash';

export default function community() {
    const elements = Array.from(document.querySelectorAll('.js-community'));

    elements.forEach(element => {
        const links = Array.from(element.querySelectorAll('.community__tabs-nav-link'));
        const tabs = Array.from(element.querySelectorAll('.community__tab-item'));
        const indicator = document.createElement('div');
        indicator.classList.add('community__tabs-indicator');

        let activeIndex = null;

        const setActiveLink = (index, forced = false) => {
            if (activeIndex === index) return;
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[index].classList.add('active');
          
            activeIndex = index;
            if (links.length) {
                const activeLinkOffsetX = links[index].offsetLeft;
                const activeLinkOffsetY = links[index].offsetTop;
                const activeLinkHeight = links[index].offsetHeight;
                const activeLinkWidth = links[index].offsetWidth;
                // console.log({
                //     activeLinkOffsetX,
                //     activeLinkOffsetY,
                //     activeLinkHeight,
                //     activeLinkWidth
                // })

                gsap.to(indicator, {
                    x: activeLinkOffsetX,
                    y: activeLinkOffsetY,
                    width: activeLinkWidth,
                    height: activeLinkHeight,
                    duration: forced ? 0 : 0.2
                });
            }
        };

        if (!links.length) return;

        links[0].parentElement.appendChild(indicator);

        if (tabs.length) {
            setActiveLink(0);
        }

        

        window.addEventListener(
            'resize',
            debounce(() => {
                setActiveLink(activeIndex, true);
            }),
            300
        );

        window.addEventListener('load', () => {
            setActiveLink(activeIndex, true);
        })

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                setActiveLink(linkIndex);
            });
        });
    });
}