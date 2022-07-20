let basket =  JSON.parse(localStorage.getItem('basket'))
// let total_price = 0;
// basket.forEach(x => {
//     total_price = x.price * x.count
//     localStorage.setItem('basket',JSON.stringify(basket))
// });

function del(element,prodcutId)
{
    let basket = JSON.parse(localStorage.getItem('basket'))
   

    let ProductIndex = basket.findIndex((p) => p.id == prodcutId);
    basket.splice(ProductIndex, 1);
   
    localStorage.setItem('basket',JSON.stringify(basket))
    element.parentElement.parentElement.remove()
   

}


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
        <td> <button class="btn btn-danger" id = "btn_delete" onclick = "del(event.target,${x.id})">DELETE</button></td>
    </tr>
        `
    });

    let sum = 0;
    let count = 0;

    for (let item of basket) {
   
        sum += item.count * item.price
        count += item.count
    }
    
    document.querySelector('#common_price').innerHTML = sum
    document.querySelector('#common_count').innerHTML = count
    document.querySelector('#tbody').innerHTML = list

   }

}

ShowAlert();    
