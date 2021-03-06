import gsap from 'gsap';

export default function quiz() {
    const elements = Array.from(document.querySelectorAll('.js-quiz'));

    elements.forEach(element => {
        const layers = Array.from(element.querySelectorAll('.modal__quiz-layer'));
        const form = element.querySelector('form');

        const nextBtns = Array.from(element.querySelectorAll('.js-quiz-next-btn'));
        const prevBtns = Array.from(element.querySelectorAll('.js-quiz-prev-btn'));
        const inputsAndTextareas = Array.from(element.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea'));
        const radiosAndCheckboxes = Array.from(element.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
        const btnsWithRequirements = Array.from(element.querySelectorAll('[data-requires]'));

        let activeLayer = null;

        const setActiveLayer = id => {
            const nextLayer = layers.find(layer =>
                layer.dataset.id
                    .split(',')
                    .map(item => item.trim())
                    .includes(id)
            );

            if (!nextLayer) {
                console.error('Next layer not found for id:', id);
            } else {
                console.log('Setting active layer', nextLayer);
            }

            nextLayer.classList.add('active');

            if (activeLayer) {
                gsap.to(activeLayer, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                }).then(() => {
                    gsap.set(activeLayer, {
                        display: 'none'
                    });
                    gsap.set(nextLayer, {
                        display: 'flex'
                    });

                    gsap.to(nextLayer, {
                        autoAlpha: 1,
                        duration: 0.3,
                        ease: 'power2.inOut'
                    });

                    activeLayer = nextLayer;
                });
            } else {
                gsap.set(nextLayer, {
                    display: 'flex'
                });
                gsap.to(nextLayer, {
                    autoAlpha: 1,
                    duration: 0.3,
                    ease: 'power2.inOut'
                });

                activeLayer = nextLayer;
            }
        };

        const checkButtons = () => {
            btnsWithRequirements.forEach(btn => {
                const requiredField = btn.dataset.requires;
                const formData = new FormData(form);

                const requiredFieldValue = formData.get(requiredField);

                if (requiredFieldValue !== null && requiredFieldValue.trim() !== '') {
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }

                console.log('Required field value', requiredFieldValue);
            });
        };

        inputsAndTextareas.forEach(input => {
            input.addEventListener('input', () => {
                checkButtons();
            });
        });

        radiosAndCheckboxes.forEach(input => {
            input.addEventListener('change', () => {
                checkButtons();
            });
        });

        const startQuiz = () => {
            setActiveLayer('start');
            form.reset();
            nextBtns.forEach(btn => (btn.disabled = true));
        };

        window.startQuiz = startQuiz;

        document.addEventListener('closemodal', () => {
            startQuiz();
        });

        startQuiz();

        nextBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                let id = '';

                if (btn.hasAttribute('data-id')) {
                    id = btn.dataset.id;
                } else if (btn.hasAttribute('data-derive-id-from')) {
                    const fieldName = btn.getAttribute('data-derive-id-from');
                    const formData = new FormData(form);
                    id = formData.get(fieldName);

                    console.log('Derived ID', id);
                }

                console.log('Clicked btn id', id);

                setActiveLayer(id);
            });
        });
        prevBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                const id = btn.dataset.id;

                const parentLayer = btn.closest('.modal__quiz-slider');

                if (parentLayer) {
                    const inputs = Array.from(parentLayer.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea'));
                    const checkboxes = Array.from(parentLayer.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
                    inputs.forEach(input => (input.value = ''));
                    checkboxes.forEach(box => (box.checked = false));
                    const nextBtn = parentLayer.querySelector('.js-quiz-next-btn');
                    nextBtn.disabled = true;
                }

                console.log('Clicked btn id', id);

                setActiveLayer(id);
            });
        });
    });
}
