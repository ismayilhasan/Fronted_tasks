let basket =  JSON.parse(localStorage.getItem('basket'))
let total_price = 0;
basket.forEach(x => {
    total_price = x.price
    localStorage.setItem('basket',JSON.stringify(basket))
});



function calcCount()
{
    let basket = JSON.parse(localStorage.getItem('basket'))
    let input_count_value = document.querySelector('#count_cc').value;

    basket.forEach(x => {
        x.count = 0
        
        
       ;

        x.count = Number(input_count_value);
        
        total_price = Number(x.count) * Number(x.price)
        

    //     basket.push({
    //     id: product_id,
    //     name:prodcut_name,
    //     img : product_img,
    //     price : sum,
    //     count : x.count
                
    // })
      
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
        <td>${Number(total_price)}</td>
    </tr>
        `
    });

    let sum = 0;
    let count = 0;
    for (let item of basket) {
        sum+= Number(basket.price)
        count+=item.count
    }
    console.log(sum);
    document.querySelector('#common_price').innerHTML = sum
    document.querySelector('#common_count').innerHTML = count
    document.querySelector('#tbody').innerHTML = list

   }

}

ShowAlert();    
