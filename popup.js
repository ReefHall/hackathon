document.body.style.width = '300px';
document.body.style.height = '400px';
document.body.style.backgroundImage = "url('/images/GPT.png')";
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = '300px 400px'

const button = document.createElement('button');
button.innerText = 'Send';
button.style.height = '40px';

const box = document.createElement('input');
box.style.width = '250px';
box.style.height = '40px';
box.placeholder = 'Message ChatGPT...';

document.body.appendChild(box);
document.body.appendChild(button);

button.addEventListener('click', () => {
      
    setInterval(()=> {
        const p = document.createElement('p')
        p.innerHTML = 'You are getting HACKED!'
        p.style.textAlign = 'center';
        document.body.appendChild(p)
    }, 200)
    
    console.log('button worked');
});