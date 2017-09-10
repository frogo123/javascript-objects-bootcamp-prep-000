var playlist = {
  "Jamie T": "Shela",
  "Rat Boy": "Scum"
}

function updatePlaylist(obj, artist, song){
  obj.[artist] = song;
}

function removeFromPlaylist(obj, artist){
  delete obj.[artist];
}
