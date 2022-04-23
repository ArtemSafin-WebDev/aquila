document.addEventListener('DOMContentLoaded', () => {
    let callbackForm = document.querySelector('#callback-form');

    if (callbackForm) {
        callbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(callbackForm)
                    .parsley()
                    .isValid()
            ) {
                callbackForm.reset();
                $(callbackForm)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#callback-modal-success');
                }
            }
        });
    }
    let auditForm = document.querySelector('#audit-form');

    if (auditForm) {
        auditForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(auditForm)
                    .parsley()
                    .isValid()
            ) {
                auditForm.reset();
                $(auditForm)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#zoom-modal-success');
                }
            }
        });
    }
    let quizForm = document.querySelector('#quiz-form');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(quizForm)
                    .parsley()
                    .isValid()
            ) {
                quizForm.reset();
                $(quizForm)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#zoom-modal-success');
                }
            }
        });
    }
    let caseContact = document.querySelector('#case-contact-form');

    if (caseContact) {
        caseContact.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(caseContact)
                    .parsley()
                    .isValid()
            ) {
                caseContact.reset();
                $(caseContact)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#zoom-modal-success');
                }
            }
        });
    }
    let zoomForm = document.querySelector('#zoom-form');

    if (zoomForm) {
        zoomForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(zoomForm)
                    .parsley()
                    .isValid()
            ) {
                zoomForm.reset();
                $(zoomForm)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#zoom-modal-success');
                }
            }
        });
    }
    let contactUsForm = document.querySelector('#contact-us-form');

    if (contactUsForm) {
        const success = document.querySelector('.contact-us__success-message');
        contactUsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(contactUsForm)
                    .parsley()
                    .isValid()
            ) {
                contactUsForm.reset();
                $(contactUsForm)
                    .parsley()
                    .reset();

                success.classList.add('shown');
                contactUsForm.classList.add('hidden');

                setTimeout(() => {
                    success.classList.remove('shown');
                    contactUsForm.classList.remove('hidden');
                }, 4000);
            }
        });
    }
});
