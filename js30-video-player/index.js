




let volume = document.querySelector('#volume');
volume.addEventListener('mousemove', function(){
    let i = volume.value;
    let color = 'linear-gradient(90deg, #bdae82 ' + i +'%, #c8c8c8 ' + i +'%)';
    volume.style.background = color;
})

const icon = document.querySelector('.icon');

let playStatus = 'playing';
icon.addEventListener('click', changePlayStatus);

function changePlayStatus () {
    icon.classList.toggle('pause');
    playStatus = icon.classList.contains('pause') ? 'playing' : 'paused';
    if (playStatus === 'playing') {document.querySelector('.play-logo').style.zIndex = -1;}else{document.querySelector('.play-logo').style.zIndex = 10;}
    togglePlay();
}

function togglePlay(){
    if (video.paused){
        video.play();
    }else{
        video.pause();
    }
}








const player = document.querySelector('.video');
const video = document.querySelector('.video-bg');
const ranges = player.querySelectorAll('.play-line');
const playLogo = document.querySelector('.play-logo');
const controls = document.querySelector('.controls');
const mute = document.querySelector('.mute');
