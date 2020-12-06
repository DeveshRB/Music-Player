const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ["Can we kiss Forever", "Baby you're worth it","Wish I was better", "Get you the moon"];

// Keep track of song
let songIndex = 3;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = `${song} ❤`;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous Song
function prevSong(){
    songIndex--;

    if(songIndex<0){
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;

    if(songIndex>songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Update progress
function updateProgress(e){
    const{duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
}

// Set Progress
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration;

}

// Event Listeners
playBtn.addEventListener('click', function() {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click',setProgress);

audio.addEventListener('ended',nextSong);



// Hamburger
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger-menu");


// event listeners
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('change');
});


clickfunc = function(text) {
   let clickText = text.innerText ;

   const index = songs.indexOf(clickText);
  
   loadSong(songs[index]);
   playSong();

}
