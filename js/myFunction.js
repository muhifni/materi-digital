function menu() {
    const btnOpener = document.querySelector('.menu-opener');
    const btnCloser = document.querySelector('.menu-closer');
    const menu = document.querySelector('.myMenu');

    btnOpener.classList.toggle('d-none');
    btnCloser.classList.toggle('d-none');
    menu.classList.toggle('d-none');
}