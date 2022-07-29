
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let getTimeFromStorage = '';
console.log(player);
playerStart();
 
player.on('timeupdate', throttle(onTime, 1000));
    
function onTime(evt) {
    const pleyedSeconds = evt.seconds;
     localStorage.setItem("videoplayer-current-time", pleyedSeconds);
    console.log(pleyedSeconds);
    
//  вариат 2
    // player.getCurrentTime().then(function (seconds) {
    //     localStorage.setItem("videoplayer-current-time", seconds);
    //     console.log(seconds);
    //      // seconds = the current playback position
    //     }).catch(function(error) {
    //       // an error occurred
// });
}

// вклчаем воспроизведение начиная с последнего записанного времени
function playerStart() {
    getTimeFromStorage = localStorage.getItem("videoplayer-current-time");
    if (getTimeFromStorage === '') { }
    else { player.setCurrentTime(getTimeFromStorage); };
};


//  вариат 2
// const getTimeFromStorage = localStorage.getItem("videoplayer-current-time");
 
// player.setCurrentTime(getTimeFromStorage).then(function(seconds) {  //функция взята из nmp
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;
//         default:
//             // some other error occurred
//             break;
//     }
// });

