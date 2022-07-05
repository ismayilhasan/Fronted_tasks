var body = document.body;
var icon = document.getElementById('mode')
function ChangeMode()
{
    if(body.style.backgroundColor === 'black')
    {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        icon.className = 'fa-solid fa-moon'
      
    }
    else
    {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        icon.className = 'fa-solid fa-sun';
    }
 
}