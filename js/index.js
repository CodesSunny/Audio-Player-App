
const uploadInput = document.getElementById("upload-input");
let title = document.getElementById("title");
let fileSize = document.getElementById("size");




uploadInput.onchange = (e)=>{
    const inputFile = e.target;
    var song = inputFile.files[0];
    const songFile = song.name;
    title.innerHTML = songFile;
    fileSize.innerHTML = "Size: " + (song.size/1000000).toFixed(1) + " "+ "mb";

    // creating audio element

    let audioTag = document.createElement("audio");
    let songUrl = URL.createObjectURL(song );
    audioTag.src = songUrl;
    audioTag.play();

    // select icons & buttons
    let playBtn = document.getElementById("play-btn")
    let playIcon = document.getElementById("play-icon");

    //  play & pause
    playBtn.onclick =()=>{
        if(audioTag.paused){
            playIcon.className = "ri-pause-fill";
            audioTag.play();
        }
        else{
            playIcon.className = "ri-play-fill";
            audioTag.pause();
        }
        
    }

    // mute-unmute
    let muteBtn = document.getElementById("mute-btn");
    let muteIcon = document.getElementById("mute-icon");


    muteBtn.onclick=()=>{
        if(audioTag.muted){
            audioTag.muted =false;
            muteIcon.className = "ri-volume-up-line";
                        } 
        else{
        audioTag.muted =true;
        muteIcon.className = "ri-volume-mute-line";
            }
                    }

     //  looping
     let loopBtn = document.getElementById("loop-btn");
     let loopIcon =document.getElementById("loop-icon");

     loopBtn.onclick=()=>{
        if(audioTag.loop){
            audioTag.loop= false;
            loopIcon.className = "ri-repeat-2-line";
        }
        else{
            audioTag.loop= true;
            loopIcon.className = "ri-repeat-one-line";
        }
     }
   
    //  forward-backward
    let forwardBtn = document.getElementById("forward-btn");
    let backwardBtn = document.getElementById("backward-btn");
    let current = audioTag.currentTime;

    forwardBtn.onclick=()=>{
        audioTag.currentTime= current+10;
    }

    backwardBtn.onclick=()=>{
        if(current>10) {
            audioTag.currentTime = (current-10);
        }
    }

    // duration show
    let fullDuration = document.getElementById("full-duration");

    audioTag.onloadedmetadata=()=>{
        let length = audioTag.duration;
        let minute = length/60;
        fullDuration.innerHTML = length;
    }

}


