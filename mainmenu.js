const openingDOM = document.getElementById('opening');
const captureFxDOM = document.getElementById('capture-fx');
const logoContainerDOM = document.getElementById('logo-container');

function playCaptureFx () {
    captureFxDOM.style.animationName = 'capture-fx';
    logoContainerDOM.style.display = 'none';
}

captureFxDOM.addEventListener('animationend', function() {
    openingDOM.style.display = 'none';
}, false);