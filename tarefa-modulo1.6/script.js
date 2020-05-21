var nightmode = document.getElementById('nightmode');
var disableNight = nightmode.getAttributeNode('disabled');
var darkmode = false;

function habilitarNightmode() {
  if (darkmode === false) {
    nightmode.removeAttributeNode(disableNight);
    darkmode = true;
  } else {
    nightmode.setAttributeNode(disableNight);
    darkmode = false;
  }
}
