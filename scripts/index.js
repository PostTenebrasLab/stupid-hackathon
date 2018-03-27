let arpeggio = ["C", "E", "G"];
let octaves = [5]//,5,6,6,7,7,8,8];
let octavesIndex = 0;
let noteIndex = 0;
let player = Synth.createInstrument('acoustic');
let decay = 0.7;

function playNextNoteFromArpeggio() {
  noteIndex = (noteIndex + 1) % arpeggio.length;
  if (noteIndex == 0) {
    octavesIndex = (octavesIndex + 1) % octaves.length;
    Synth.setVolume(Synth.getVolume()*decay);
  }
  player.play(arpeggio[noteIndex], octaves[octavesIndex], 0.5);

}


function changeTextColor() {
  let hue = Math.floor(Math.random() * 400)
  let color = "hsl(" + hue.toString() +", 100%, 50%)";
  let backgroundColor = "hsl(" + ((hue + 200) % 400).toString() +", 100%, 50%)";
  document.getElementById("stupid-h1").style.color = color;
  document.getElementById("stupid-h1").style.backgroundColor = backgroundColor;
}

function loadTitleDisplay(contents, lang, lineIndex) {
  let titleDisplay = document.getElementById('title-display');
  let titleLines = contents[lang].titleLines;
  let line = titleLines[lineIndex];
  let lineElement = document.createElement("h1");
  lineElement.innerHTML = line;
  titleDisplay.appendChild(lineElement);
  if (lineIndex === titleLines.length - 1) {
      lineElement.id = "stupid-h1";
      window.setInterval(changeTextColor, 50);
      window.setInterval(playNextNoteFromArpeggio, 75);
      setTimeout(() => {
        document.getElementById('main-content').style.visibility = "visible";
      }, 1000);
  }
  else {
    setTimeout(()=> {loadTitleDisplay(contents, lang, lineIndex+1)}, 1000);
  }
}

let userLang = getLang(false);
loadTitleDisplay(contents, userLang, 0);
