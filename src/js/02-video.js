
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player);

 
player.on('timeupdate', throttle(onTime, 1000));
    
function onTime() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
        console.log(seconds);
         // seconds = the current playback position
        }).catch(function(error) {
          // an error occurred
});
}

// вклчаем воспроизведение начиная с последнего записанного времени
const getTimeFromStorage = localStorage.getItem("videoplayer-current-time");
 
player.setCurrentTime(getTimeFromStorage).then(function(seconds) {  //функция взята из nmp
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

