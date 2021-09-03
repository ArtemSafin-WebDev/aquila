export default function cookies() {
    const cookiesBtns = Array.from(document.querySelectorAll('.cookies__accept-btn'));

    cookiesBtns.forEach(function(btn) {
        if (btn) {
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                document.body.classList.remove('cookies-panel-shown');
                localStorage.setItem('cookiesAccepted', 1);
            });
        }
    });

    if (localStorage.getItem('cookiesAccepted') != 1) {
        document.body.classList.add('cookies-panel-shown');
    }
}
