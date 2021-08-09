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
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    pageNav();
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
