var btn_delete = document.querySelector('btn_delete')
var btn = document.querySelector('#btn_add')

function Del_Row(e)
{
    e.target.parentElement.remove()
}


btn.addEventListener('click', () => {
    var input_value = document.getElementById('input').value
    var list= ''
   
    
    list += `
    <li class = "user-list">
    <span>${input_value}</span>
    <button id="btn_delete" class="btn-danger" onclick = "Del_Row(event)">Delete</button>
    </li>
    `
    document.querySelector('#list').innerHTML += list
    

    
})

