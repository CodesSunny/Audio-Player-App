
const uploadInput = document.getElementById("upload-input");
let title = document.getElementById("title");
let fileSize = document.getElementById("size");


uploadInput.onchange = (e)=>{
    const inputFile = e.target;
    var song = inputFile.files[0];
    const songFile = song.name;
    title.innerHTML = songFile;
    fileSize.innerHTML = "Size: " + (song.size/1000000).toFixed(1) + " "+ "mb";

    // select icons & buttons
    let playBtn = document.getElementById("play-btn")
    let playIcon = document.getElementById("play-icon");

    
    // creating audio element
    let audioTag = document.createElement("audio");
    let songUrl = URL.createObjectURL(song);
    audioTag.src = songUrl;
    audioTag.play();
    playIcon.className = "ri-pause-fill";


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

     //  looping audio
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

    // get duration of audio
    let fullDuration = document.getElementById("full-duration");
    audioTag.onloadedmetadata=()=>{
        let length = audioTag.duration;
        let minute =Math.floor(length/60);
        let second = Math.round(length%60);
        fullDuration.innerHTML = minute + "m" + second +"s";
    }


    //  show progress & current time of audio
    
    audioTag.ontimeupdate=()=>{
        let currentDuration = document.getElementById("current-duration");
        let currentTime = audioTag.currentTime;
        let minute =Math.floor(currentTime/60);
        let second = Math.round(currentTime%60);
        currentDuration.innerHTML = minute + "m" + second +"s";
        let progressBar = document.getElementById("progress-bar");
        let totalDuration = audioTag.duration;
        let percentDuration = Math.round((currentTime/totalDuration)*100) ;
        progressBar.style.width = percentDuration + "%";    
    }

    // volume control
    let volumeInput = document.getElementById("volume");
    volumeInput.oninput=()=>{
        audioTag.volume = volumeInput.value; 
    }

    // show volume slider
    let volumeSlider = document.getElementById("volume-box");
    let volumeBtn = document.getElementById("volume-btn");
    volumeBtn.onclick=()=>{
        if(volumeSlider.style.display == "none"){
            volumeSlider.style.display = "block";   
        }
        else{
            volumeSlider.style.display = "none";
        }
    }

}


 // when no audio selected
 let audioTag =null;
 let playBtn = document.getElementById("play-btn");
 playBtn.onclick= ()=>{
    console.log(audioTag);
    
    if(audioTag==null){
        Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "no audio selected",
      });
    }
}


