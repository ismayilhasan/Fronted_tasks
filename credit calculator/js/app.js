var btn = document.getElementById('btn')

btn.onclick = function Calc()
{
    var input = Number(document.getElementById('price').value)
    var percent =Number(document.getElementById('percent').value) 
    var select_input = Number(document.getElementById('slc').value)

    if(select_input <= 12)
    {
        var percent_of_price = (input*percent)/100
        var common_price = Number( input + percent_of_price )
        var monthly_price = common_price / select_input;
        document.getElementById('Common-Price').innerHTML = common_price;
        document.getElementById('Monthly').innerHTML = monthly_price.toFixed()
    }
    else if(select_input > 12 && select_input <=24)
    {
        
        var percent_of_price = (input*percent)/100
        var common_price = Number( input + (percent_of_price *2) )
        var monthly_price = common_price / select_input;
        document.getElementById('Common-Price').innerHTML = common_price;
        document.getElementById('Monthly').innerHTML = monthly_price.toFixed()

    }
    else
    {
        var percent_of_price = (input*percent)/100
        var common_price = Number( input + (percent_of_price)*3 )
        var monthly_price = common_price / select_input;
        document.getElementById('Common-Price').innerHTML = common_price;
        document.getElementById('Monthly').innerHTML = monthly_price.toFixed()
    }
   

}

