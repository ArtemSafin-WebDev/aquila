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

        const setActiveLayer = id => {
            layers.forEach(layer => layer.classList.remove('active'));
            const nextLayer = layers.find(layer =>
                layer.dataset.id
                    .split(',')
                    .map(item => item.trim())
                    .includes(id)
            );

            if (!nextLayer) {
                console.error('Next layer not found for id:', id);
            }

            nextLayer.classList.add('active');
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

                console.log('Clicked btn id', id);

                setActiveLayer(id);
            });
        });
    });
}
