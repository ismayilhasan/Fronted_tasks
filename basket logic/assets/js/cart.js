let basket =  JSON.parse(localStorage.getItem('basket'))
let total_price = 0;
basket.forEach(x => {
    total_price = x.price
    localStorage.setItem('basket',JSON.stringify(basket))
});

function del(event)
{
  console.log();        
}

var delete_btns = document.querySelectorAll('#btn_delete')
    
function calcCount(el, productId)
{
    let basket = JSON.parse(localStorage.getItem('basket'))
    let input_count_value = +el.value;

    let product = basket.find(p => p.id == productId);

    product.count = input_count_value;

    localStorage.setItem('basket',JSON.stringify(basket))
    ShowAlert(); 
}



function ShowAlert()
{
    let basket = JSON.parse(localStorage.getItem("basket")) 

   if(basket.length === 0)
   {
    document.querySelector('#alert').classList.remove('d-none')
   }     
   else{
    document.querySelector('#alert').classList.add('d-none')
    let list = '';

    basket.forEach(x  => {
        list+= `
        <tr>
        <td>${x.id}</td>
        <td class = "w-40">     
            <img src="${x.img}" alt="">
        </td>
        <td>${x.name}</td>
        <td>
        <input type="number" id = "count_cc" value = "${x.count}" style="width: 45%; height: 40px;" onchange="calcCount(event.target, ${x.id})">
        </td>
        <td>${x.price}</td>
        <td>${x.price * x.count}</td>
        <td> <button class="btn btn-danger" id = "btn_delete" onclick = "del(event)">DELETE</button></td>
    </tr>
        `
    });

    let sum = 0;
    let count = 0;

    for (let item of basket) {
   
        sum += item.total_price
        count += item.count
    }
    
    document.querySelector('#common_price').innerHTML = sum
    document.querySelector('#common_count').innerHTML = count
    document.querySelector('#tbody').innerHTML = list

   }

}

ShowAlert();    
