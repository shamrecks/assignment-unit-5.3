console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
  };
  collection.push(newAlbum);
  return newAlbum;
}


let newAlbum1 = addToCollection(myCollection, "Good A:M", "Mac Miller","2015" );
console.log(myCollection);
let newAlbum2 = addToCollection(myCollection, "Graduation", "Kanye West","2007" );
let newAlbum3 = addToCollection(myCollection, "The Marshall Mathers LP", "Eminem","2000" );
let newAlbum4 = addToCollection(myCollection, "Madvillainy", "Madvillain","2004" );
let newAlbum5 = addToCollection(myCollection, "Pray For Paris", "Westside Gunn","2020" );
let newAlbum6 = addToCollection(myCollection, "Nothing Great About Britain", "slowthai","2019" );
console.log(myCollection);

function showCollection(collection) {
for (let i = 0; i < collection.length; i++) {
  let item = collection[i];
  console.log(`Item ${i + 1}: Title: ${item.title}, Artist: ${item.artist}, Year Published: ${item.yearPublished}`);
}
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let results = [];

  for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === artist) {
          results.push(collection[i]);
      }
  }

  return results;
}

let EminemAlbums = findByArtist(myCollection, 'Eminem');
console.log(EminemAlbums);



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
