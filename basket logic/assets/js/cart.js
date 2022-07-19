let basket =  JSON.parse(localStorage.getItem('basket'))
let total_price = 0;
basket.forEach(x => {
    total_price = x.price
    localStorage.setItem('basket',JSON.stringify(basket))
});



var delete_btns = document.querySelectorAll('#btn_delete')
    
function calcCount()
{
    let basket = JSON.parse(localStorage.getItem('basket'))
    let input_count_value = document.querySelector('#count_cc').value;

    basket.forEach(x => {
        x.count = 0;
        
        
       

        x.count = Number(input_count_value);
        
        let total_price = x.count * x.price
        x.total_price = total_price
        basket.push()
        
    })  




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
        <input type="number" id = "count_cc" value = "${x.count}" style="width: 45%; height: 40px;" onchange="calcCount()">
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
   
        console.log(typeof(basket.total_price));
        basket.total_price+= basket.total_price
        count+=item.count
    }
    
    document.querySelector('#common_price').innerHTML = basket.total_price
    document.querySelector('#common_count').innerHTML = count
    document.querySelector('#tbody').innerHTML = list

   }

}

ShowAlert();    
