var FileReader = require('filereader')
// var Blob = require("blob");
const Blob = require('node-blob');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ReadBlob = require('read-blob');

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var fs = require ('fs');
var fetch = require ('node-fetch');
blobOne = "blob:https://www.youtube.com/2e3f63cb-d7b2-404e-b347-b9674e2b51d7";





// const blb    = new Blob(["Lorem ipsum sit"], {type: "text/plain"});
// const reader = new FileReader();

// // This fires after the blob has been read/loaded.
// reader.addEventListener('loadend', (e) => {
//   const text = e.srcElement.result;
//   console.log(text);
// });

// // Start reading the blob as text.
// reader.readAsText(blb);



// var blob = new Blob(["Hello, world!"], { type: 'text/plain' });
// var blobUrl = URL.createObjectURL(blob);

// var xhr = new XMLHttpRequest;
// xhr.responseType = 'blob';

// xhr.onload = function() {
//    var recoveredBlob = xhr.response;

//    var reader = new FileReader;

//    reader.onload = function() {
//      var blobAsDataUrl = reader.result;
//      window.location = blobAsDataUrl;
//    };

//    reader.readAsDataURL(recoveredBlob);
// };

// xhr.open('GET', blobUrl);
// xhr.send();



// var myBlob = new Blob(["Hello"], {type : "text/plain"});
// var myReader = new FileReader();
// //handler executed once reading(blob content referenced to a variable) from blob is finished. 
// myReader.addEventListener("loadend", function(e){
//     document.getElementById("text").innerHTML = e.srcElement.result;//prints a string
// });
// //start the reading process.
// myReader.readAsText(myBlob);

 
// ReadBlob(blobOne, 'dataurl', function (err, dataurl) {
//   if (err) throw err;
 
//   console.log('that was simple!');
//   img.src = dataurl;
// });


// fetch (
//    blobOne,
//    {
//       method: 'GET',
//       headers: { 'Accept': '*/*' }
//    }
// )
// .then ((res) => res.blob())
// .then ((blob) => {
//     console.log ('Blob size: ', blob.size);

//     fs.writeFile (
//         `filename.mp3`,
//         blob,  // BUG HERE
//         (err) => {
//             if (err) {
//                 console.log (`Error writing audio ${BlobOneIdx}`, err);
//             }
//         }
//     );
// })


// var myBlob = new Blob(["Hello"], {type : "text/plain"});
// var myReader = new FileReader();
// //handler executed once reading(blob content referenced to a variable) from blob is finished. 
// myReader.addEventListener("loadend", function(e){
//     document.getElementById("text").innerHTML = e.srcElement.result;//prints a string
// });
// //start the reading process.
// myReader.readAsText(myBlob);


// let buffer = Buffer.from(arraybuffer);
// let arraybuffer = Uint8Array.from(buffer).buffer;

// blobOne = "blob:https://www.youtube.com/2e3f63cb-d7b2-404e-b347-b9674e2b51d7";


// var b = new Blob(['hi', 'constructing', 'a', 'blob']);
// console.log(b)
// var myBlob = new Blob(["Hello"], {type : "text/plain"});
// var myReader = new FileReader();
// //handler executed once reading(blob content referenced to a variable) from blob is finished. 
// myReader.addEventListener("loadend", function(e){
//     document.getElementById("text").innerHTML = e.srcElement.result;//prints a string
// });
// //start the reading process.
// myReader.readAsText(myBlob);


// var reader = new FileReader();
// reader.addEventListener("loadend", function() {
//    // reader.result contains the contents of blob as a typed array
// });
// reader.readAsArrayBuffer(blobOne);



// Routes
// Root Request
app.get('/', (req, res) => {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index.ejs');
})
app.listen(port, () => {
    console.log(`Server Running On port ${port}`);
})

