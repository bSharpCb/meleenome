/*
frame data sourced from:
https://smashboards.com/threads/falco-hitboxes-and-frame-data.300397/
*/

document.getElementById('shine').volume = .2;

const shine = {
    img: '<img src="./img/btn_b.svg">',
    audio: 'shine'   
}

const jump = {
    img: '<img src="./img/btn_y.svg">',
    audio: 'jump'
}

const shield = {
    img: '<img src="./img/btn_l.svg">',
    audio: 'shield'
}

const patterns = [
    multishine = {
        frames: [0, 7, 12, 21, 26],
        inputs: [shine, jump, shine, jump, shine]
    },
    waveshine = {
        frames: [0, 7, 12, 22],
        inputs: [shine, jump, shield, shine]
    }   
];

function formatNome (patIndex) {
    let pattern = patterns[patIndex];
    let timeFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];
    if (pattern && pattern.frames.length == pattern.inputs.length){
        let arrf = pattern.frames;
        let arri = pattern.inputs;
        for (let n = 0; n<arrf.length; n++) {
            timeFrames[arrf[n]] = arri[n];
        }
    }
    return timeFrames;
}


function progressFrame(frame,timeFrames) {
    if (typeof(timeFrames[frame]) != "number") {
        document.getElementById(timeFrames[frame].audio).play();
        document.getElementById('frameData').innerHTML = timeFrames[frame].img;    
    }else{
        console.log(timeFrames[frame]);
        document.getElementById('frameData').innerHTML = timeFrames[frame];
    }
    if (frame==59) {
        frame=0;
    }else{
        frame +=1;
    }
    return frame;
} 


function startNome (patIndex) {
    let i = 0;
    let speed = document.getElementById('pbSpeed').value;
    if(patIndex != 'stop') {
        let timeFrames = formatNome(patIndex);
        document.getElementById('jump').playbackRate = 1;
        document.getElementById('shine').playbackRate = 1;
        document.getElementById('shield').playbackRate = 1;
        return nomeClicks = setInterval(function(){i = progressFrame(i,timeFrames)},17/speed);
    }else{
        clearInterval(nomeClicks);
    }
}
