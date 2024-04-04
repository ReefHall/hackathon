// // document.addEventListener('yourEventName', function(e){
// //     //send message to ext
// //     var someInformation = {/*your msg here*/}
// //     chrome.extension.sendMessage(someInformation, function(response) {
// //        //callback
// //     });
// //  }, false);

// document.addEventListener('DOMContentLoaded', function () {
//     const appendImageBtn = document.getElementById('Button1');

//     appendImageBtn.addEventListener('click', function () {
//       chrome.tabs.executeScript({
//         code: 'const img = document.createElement("img"); img.src = "/images/emoji.png"; document.body.appendChild(img);'
//       });
//     });
//   });

// const img = document.createElement('img');
// img.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg";
// img.style.width = "50px";
// img.style.height = "50px";

// document.body.appendChild(img);

// document.body.appendChild(document.createTextNode("This is a line of text added by my extension."));

// (function() {
//     let img = document.createElement("img");
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg";
//     img.style.position = "absolute";
//     img.style.width = "500px";
//     img.style.height = "500px";
//     document.body.appendChild(img);
//   })();
let width = 5;
let height = 5;

let img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg';
img.style.position = 'absolute';
img.style.top = 0;
img.style.width = `${width}px`;
img.style.height = `${height}px`;

let img2 = document.createElement('img');
img2.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wilde_huendin_am_stillen.jpg';
img2.style.position = 'absolute';
img2.style.top = 0;
img2.style.right = 0;
img2.style.width = `${width}px`;
img2.style.height = `${height}px`;

let img3 = document.createElement('img');
img3.src = 'https://pbs.twimg.com/profile_images/1426662283456000008/CjBDzaeX_400x400.jpg';
img3.style.position = 'absolute';
img3.style.top = 0;
img3.style.width = `${width}px`;
img3.style.height = `${height}px`;

document.addEventListener('keydown', () => {
     width += 40;
     height += 40;
     img.style.width = `${width}px`;
     img.style.height = `${height}px`;
     document.body.appendChild(img);
     console.log('I worked');
});

document.addEventListener('click', () => {
     width += 40;
     height += 40;
     img2.style.width = `${width}px`;
     img2.style.height = `${height}px`;
     document.body.appendChild(img2);
     console.log('I worked');
});

document.addEventListener('scroll', () => {
    width += 5;
    height += 5;
    img3.style.width = `${width}px`;
    img3.style.height = `${height}px`;
    document.body.appendChild(img3);
    console.log('I worked');
});