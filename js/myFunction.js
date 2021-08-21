function menu() {
    const btnOpener = document.querySelector('.opener-btn');
    const btnCloser = document.querySelector('.menu-closer');
    const menu = document.querySelector('.myMenu');

    btnOpener.classList.toggle('d-none');
    btnCloser.classList.toggle('d-none');
    menu.classList.toggle('d-none');
}


// Click image to full size
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// music
const musicOnBtn = document.querySelector('.music-on-btn');
const musicOffBtn = document.querySelector('.music-off-btn');

const music = document.getElementById('music');

function musicOn() {
  music.play();
  musicOffBtn.classList.toggle('d-none')
  musicOnBtn.classList.toggle('d-none')
}

function musicOff() {
  music.pause();
  musicOffBtn.classList.toggle('d-none')
  musicOnBtn.classList.toggle('d-none')
}