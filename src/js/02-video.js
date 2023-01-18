import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_DATA_PLAYER = "timer"

player.on("timeupdate", throttle(currentTimePlaying, 1000));

if (localStorage.length){
player.setCurrentTime(localStorage.getItem(TIME_DATA_PLAYER));}

// Function to save current time playing 
function currentTimePlaying (data) {
    localStorage.setItem(TIME_DATA_PLAYER, data.seconds)
}