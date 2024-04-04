let widthCat = 20;
let heightCat = 20;
let widthDog = 20;
let heightDog = 20;
let widthWill = 20;
let heightWill = 20;

let img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg';
img.style.position = 'absolute';
img.style.top = 0;
img.style.width = `${widthCat}px`;
img.style.height = `${heightCat}px`;

let img2 = document.createElement('img');
img2.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wilde_huendin_am_stillen.jpg';
img2.style.position = 'absolute';
img2.style.top = 0;
img2.style.right = 0;
img2.style.width = `${widthDog}px`;
img2.style.height = `${heightDog}px`;

let img3 = document.createElement('img');
img3.src = 'https://pbs.twimg.com/profile_images/1426662283456000008/CjBDzaeX_400x400.jpg';
img3.style.position = 'absolute';
img3.style.top = 0;
img3.style.width = `${widthWill}px`;
img3.style.height = `${heightWill}px`;

document.addEventListener('keydown', () => {
     widthCat += 60;
     heightCat += 60;
     img.style.width = `${widthCat}px`;
     img.style.height = `${heightCat}px`;
     document.body.appendChild(img);
     document.body.style.backgroundColor = 'blue'
     console.log('I worked');
});

document.addEventListener('click', () => {
     widthDog += 60;
     heightDog += 60;
     img2.style.width = `${widthDog}px`;
     img2.style.height = `${heightDog}px`;
     document.body.appendChild(img2);
     document.body.style.backgroundColor = 'yellow'
     console.log('I worked');
});

document.addEventListener('scroll', () => {
    widthWill += 10;
    heightWill += 10;
    img3.style.width = `${widthWill}px`;
    img3.style.height = `${heightWill}px`;
    document.body.appendChild(img3);
    document.body.style.backgroundColor = 'green'
    console.log('I worked');
});