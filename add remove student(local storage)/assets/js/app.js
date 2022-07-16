let btn = document.querySelector('#add_btn')
let btn_del = document.querySelector('#delete_btn')

if(localStorage.getItem('users') === null)
{
    localStorage.setItem('users',JSON.stringify([]))
}

btn.addEventListener('click',() => {
    let username = document.querySelector('#username').value
    let email = document.querySelector('#email').value

    let user_list = JSON.parse(localStorage.getItem('users'))

    user_list.push({
        name : username,
        email : email
    });

    localStorage.setItem('users',JSON.stringify(user_list))

    alert(`${username} adli isdifadeci elave olundu`)

    
    getUsers();
    showAlert();
})

btn_del.addEventListener('click',() => {
    localStorage.setItem('users',JSON.stringify([]))
    getUsers();
})


function getUsers()
{
    let item = ''
    let user_list = JSON.parse(localStorage.getItem('users'))
    user_list.forEach(user => {
        item+= `
        <div class="col-lg-4 mb-4">
                <div class="box">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
         </div>
        `
    });

    document.querySelector('#list').innerHTML = item
    showAlert();

}

function showAlert()
{
    let user_list = JSON.parse(localStorage.getItem('users'))

    if(user_list.length === 0)
    {
        document.querySelector('#Alert').classList.remove('d-none')
    }
    else{
        document.querySelector('#Alert').classList.add('d-none')
    }
}

getUsers();
