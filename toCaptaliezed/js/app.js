var btn = document.getElementById('btn')

btn.onclick = () => {
var first_letter = document.getElementById('input').value.slice(0,1).toUpperCase()

var content = document.getElementById('input').value.slice(1).toLowerCase()

document.getElementById('result').innerHTML = first_letter + content;
}