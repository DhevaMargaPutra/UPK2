const openingDOM = document.getElementById('opening');
// const logoOpeningDOM = document.getElementById('logo');
// const materiBtnDOM = document.getElementById('materi-button');
// const soalBtnDOM = document.getElementById('soal-button');
// const simulasiBtnDOM = document.getElementById('simulasi-button');
// const profilBtnDOM = document.getElementById('profil-button');

function playOnce(element, animation, callback) {
    element.classList.add('animated', animation);
    
    function handleEndAnimation() {
        console.log('c');
        element.classList.remove('animated', animation);
        element.removeEventListener('animationend', handleEndAnimation);
        
        if (typeof callback === 'function') callback();
    }
    
    element.addEventListener('animationend', handleEndAnimation);
}

function playCaptureFx () {
    playOnce(openingDOM, 'flash', function() {
        openingDOM.style.display = 'none';
    });
}

// logoOpeningDOM.addEventListener('mousedown', function() {
//     addAnimation('logo', 'bounceIn');
// });

// logoOpeningDOM.addEventListener('mouseup', function() {
//     logoOpeningDOM.classList.remove('animated', 'bounceIn');
// });

// logoOpeningDOM.addEventListener('animationend', function() {
//     playCaptureFx();
// });

// openingDOM.children[0].addEventListener('animationend', function() {
//     openingDOM.style.display = 'none';
// });

// // materi
// materiBtnDOM.addEventListener('mouseenter', function() {
//     materiBtnDOM.children[1].style.opacity = '1';
// });

// materiBtnDOM.addEventListener('mouseleave', function() {
//     materiBtnDOM.children[1].style.opacity = '0';
// });

// // soal
// soalBtnDOM.addEventListener('mouseenter', function() {
//     soalBtnDOM.children[1].style.opacity = '1';
// });

// soalBtnDOM.addEventListener('mouseleave', function() {
//     soalBtnDOM.children[1].style.opacity = '0';
// });

// // simulasi
// simulasiBtnDOM.addEventListener('mouseenter', function() {
//     simulasiBtnDOM.children[1].style.opacity = '1';
// });

// simulasiBtnDOM.addEventListener('mouseleave', function() {
//     simulasiBtnDOM.children[1].style.opacity = '0';
// });

// // profil
// profilBtnDOM.addEventListener('mouseenter', function() {
//     profilBtnDOM.children[1].style.opacity = '1';
// });

// profilBtnDOM.addEventListener('mouseleave', function() {
//     profilBtnDOM.children[1].style.opacity = '0';
// });