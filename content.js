let width = 20;
let height = 20;

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
     width += 60;
     height += 60;
     img.style.width = `${width}px`;
     img.style.height = `${height}px`;
     document.body.appendChild(img);
     console.log('I worked');
});

document.addEventListener('click', () => {
     width += 60;
     height += 60;
     img2.style.width = `${width}px`;
     img2.style.height = `${height}px`;
     document.body.appendChild(img2);
     console.log('I worked');
});

document.addEventListener('scroll', () => {
    width += 10;
    height += 10;
    img3.style.width = `${width}px`;
    img3.style.height = `${height}px`;
    document.body.appendChild(img3);
    console.log('I worked');
});