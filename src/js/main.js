import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import specialists from './specialists';
import community from './community';
import pageNav from './pageNav';
import anchorLinks from './anchorLinks';
import sectionsMenu from './sectionsMenu';
import modals from './modals';
import modalSlider from './modalSlider';
import intro from './intro';
import cases from './cases';
import services from './services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fancybox from './fancybox';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    modals();
    onlyNumeric();
    fileUpload();
    specialists();
    community();
    anchorLinks();
    sectionsMenu();
    modalSlider();
    intro();
    cases();
    services();
    pageNav();
    fancybox();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => {
        document.body.classList.add('animatable');
    }, 300);
});
