console.log("Welcome to spotify");

// Intialize the variables
let songIndex = 0 ;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [   
    {songName: "Warriyo - Mortals [NCS Release]" ,filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma" ,filePath: "song/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k" ,filePath: "song/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]" ,filePath: "song/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release" ,filePath: "song/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq" ,filePath: "song/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq" ,filePath: "song/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq" ,filePath: "song/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq" ,filePath: "song/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq" ,filePath: "song/10.mp3" , coverPath: "covers/10.jpg"},
];

songItem.forEach((element , i )=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})


// Handle play / pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

 // listen to Events
 audioElement.addEventListener('timeupdate', ()=>{
    // Updating Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressbar.value = progress;
 });

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value* audioElement.duration/100 ; 
});

const makeAllPlays  = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });

};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click',  (e)=> {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0; 
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    });


});


document.getElementById('next').addEventListener('click' , ()=> {
    if (songIndex >= 9) {
        songIndex = 0 ; 

    }
    else{
        songIndex += 1 ; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click' , ()=> {
    if (songIndex <= 0) {
        songIndex = 0 ; 

    }
    else{
        songIndex -= 1 ; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})