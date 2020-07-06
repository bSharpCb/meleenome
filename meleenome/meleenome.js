/*
frame data sourced from:
https://smashboards.com/threads/falco-hitboxes-and-frame-data.300397/
*/

function multishine(start){
    let jump = start + 7;
    let jcShine = jump + 5;
    let jump2 = jcShine + 9;
    let jcShine2 = jump2 + 5;
    return [start, jump, jcShine, jump2, jcShine2];
}

document.getElementById('shine').volume = .2;

const buttonFrames = [ 0, 7, 12, 21, 26 ];

let timeFrames = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];

timeFrames[0] = shine;
timeFrames[7] = jump;
timeFrames[12] = shine;
timeFrames[21] = jump;
timeFrames[26] = shine;

let shine = {
    img: '<img src="./img/btn_b.svg">',
    audio: 'shine'   
}

let jump = {
    img: '<img src="./img/btn_y.svg">',
    audio: 'jump'
}

let shield = {
    img: '<img src="./img/btn_l.svg">',
    audio: 'shield'
}


function progressFrame(frame) {

        if (typeof(timeFrames[frame]) != "number") {
            document.getElementById(timeFrames[frame].audio).play()
            document.getElementById('frameData').innerHTML = timeFrames[frame].img;    
        }else{
            console.log(timeFrames[frame]);
            document.getElementById('frameData').innerHTML = timeFrames[frame]
        }
    
    if (frame==59) {
        frame=0;
    }else{
        frame +=1;
    }
    return frame;
} 
function startNome (speed) {
    let i = 0;
    if(speed != 'stop') {
        document.getElementById('jump').playbackRate = 5 * speed;
        document.getElementById('shine').playbackRate = 10 * speed;
        return nomeClicks = setInterval(function(){i = progressFrame(i)},17/speed);
    }else{
        clearInterval(nomeClicks);
    }
}
