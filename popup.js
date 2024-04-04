document.body.style.width = '300px';
document.body.style.height = '400px';
document.body.style.backgroundColor = 'gray';


const button = document.createElement('button');
button.innerText = 'Try Me';
document.body.appendChild(button);
button.addEventListener('click', () => {
    setInterval(()=> {
        const p = document.createElement('p')
        p.innerHTML = "You are H"
    },)
    console.log('button worked');
});