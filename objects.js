var playlist = { song1: "title1",
                 song2: "title2"
  
};
var aName = "Jimmy Hendrix"
var aName2 = "Michael Jackson"
var aTitle = "Purple Haze"
var aTitle2 = "Beat it"

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// console.log(updatePlaylist(playlist, aName, aTitle));

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist(artistName, songTitle);
  return playlist;
}

// console.log(removeFromPlaylist(playlist, aName, aTitle));



array = ["t1", "t2", "t3", "t4"];

function runny(array) {
return Object.assign({}, array, ['thing'], ['thing2']);
 
}
runny(array);

console.log(array);









