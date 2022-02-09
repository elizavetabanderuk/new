const video = document.querySelector('video');
const icon = document.querySelector('.icon');
const playLogo = document.querySelector('.play-logo');
playLogo.addEventListener('click', togglePlay);
icon.addEventListener('click', togglePlay);


function togglePlay(){
    if (video.paused){
        video.play();
        icon.classList.add('pause');
        playLogo.style.zIndex = -1;
    }else{
        video.pause();
        icon.classList.remove('pause');
        playLogo.style.zIndex = 10;
    }
}

function setVolume() {
    video.volume = 0.5;
};
video.addEventListener('loadeddata', setVolume);

let volume = document.querySelector('#volume');
volume.addEventListener('mousemove', function(){
    let i = volume.value;
    let color = 'linear-gradient(90deg, #bdae82 ' + i +'%, #c8c8c8 ' + i +'%)';
    volume.style.background = color;
})

const muteBtn = document.querySelector('.mute');
function updateVolume(){
    video.muted = !video.muted;
    if (video.muted) {
        muteBtn.classList.add('volume-off');
    } else {
        muteBtn.classList.remove('volume-off');
    }
};
muteBtn.addEventListener('click', updateVolume);


const controls = document.querySelector('.controls');
volume.addEventListener('click', e => {
  const barWidth = window.getComputedStyle(volume).width;
  const newVolume = e.offsetX / parseInt(barWidth);
  video.volume = newVolume;
  controls.querySelector('#volume').style.width = newVolume * 100;
}, false);

const progress = document.querySelector('.play-line');

progress.addEventListener("change", function() {
    //Calculate new time
    var newTime = video.duration * (progress.value / 100);

    video.currentTime = newTime;
});

//As video progresses, seekBar moves forward
video.addEventListener("timeupdate", function() {
    var value = (100 / video.duration) * video.currentTime;
    progress.value = value;
    progress.style.background = `linear-gradient(90deg, #bdae82 ${value}%, #c8c8c8 ${value}%)`;
});









