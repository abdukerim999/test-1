document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');

    colorBox.addEventListener('click', () => {
        colorBox.classList.toggle('active');
    });
});
const myDiv = document.getElementById('block');
const colorButton = document.getElementById('btn');

colorButton.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    myDiv.style.backgroundColor = '#' + randomColor;
})