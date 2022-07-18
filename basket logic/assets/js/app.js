if(localStorage.getItem('basket') === null)
{
    localStorage.setItem('basket',JSON.stringify([]))
}


let buttons = document.querySelectorAll('.btn')

for (let btn of buttons) {
  btn.addEventListener('click',(event) => {
        event.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'))
        let product_id = event.target.parentElement.parentElement.parentElement.id
        let product_img = event.target.parentElement.previousElementSibling.src
        let prodcut_name = event.target.previousElementSibling.previousElementSibling.innerText
        let product_price = event.target.previousElementSibling.innerText

        let existProduct = basket.find(x => x.id === product_id);

        if(existProduct === undefined)
        {
          basket.push({
            id: product_id,
            name:prodcut_name,
            img : product_img,
            price : product_price,
            count : 1

        })
        }
        else{
            existProduct.count+=1   
        }


        localStorage.setItem('basket',JSON.stringify(basket))
        ShowCount()
  })
}



function ShowCount(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    let count = basket.length
    document.querySelector('#count').innerHTML = count
}

ShowCount()