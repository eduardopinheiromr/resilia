window.addEventListener('load', start);

function start() {
  console.log('Página 100% carregada.');
}

var nightmode = document.getElementById('nightmode');
var disableNight = nightmode.getAttributeNode('disabled');
var darkmode = false;
const searchbar = document.getElementById('filmepesquisado');

function habilitarNightmode() {
  if (darkmode === false) {
    nightmode.removeAttributeNode(disableNight);
    darkmode = true;
  } else {
    nightmode.setAttributeNode(disableNight);
    darkmode = false;
  }
}
