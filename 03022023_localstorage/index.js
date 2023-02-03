// localStorage.setItem('color','red');

// targil:
// 1) add input
// 2) paragraph text should be the same as text inside the input
// 3) (on refresh page text should remain the same as it was in input last time we wrote something there)
// 4) on reset button it should go back to "Hello World" 
// ** If no text written in input text should be "Hello World"

const textColor = localStorage.getItem('color');
const textValue = localStorage.getItem('text');

console.log(textColor)

if (textColor) {
    document.getElementById("myP").style.color = textColor;
}

if (textValue) {
    document.getElementById('myP').textContent = textValue;
    document.getElementById('myInput').value = textValue;
}


const resetAll = () =>{
    localStorage.clear();
    document.getElementById("myP").style.color = 'black';
    document.getElementById('myP').textContent = "Hello World";
    document.getElementById('myInput').value = '';
}

document.getElementById('btnRed').addEventListener('click', () => {
    const COLOR = 'red';
    localStorage.setItem('color', COLOR);
    document.getElementById("myP").style.color = COLOR;
})
document.getElementById('btnBlue').addEventListener('click', () => {
    const COLOR = 'blue';
    localStorage.setItem('color', COLOR);
    document.getElementById("myP").style.color = COLOR;
})
document.getElementById('btnGreen').addEventListener('click', () => {
    const COLOR = 'green';
    localStorage.setItem('color', COLOR);
    document.getElementById("myP").style.color = COLOR;
})
document.getElementById('btnReset').addEventListener('click', () => {
    // localStorage.removeItem('color');
    resetAll();
})

document.getElementById('myInput').addEventListener('input', (event) => {
    console.log(event.target.value)
    document.getElementById("myP").textContent = event.target.value;
    localStorage.setItem('text', event.target.value)
    // console.log(document.getElementById('myInput').value);
})


