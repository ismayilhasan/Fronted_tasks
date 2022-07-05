   

var all = document.getElementById('all')

function Change()
{
  

    if(  confirm('Do you want to see website??? ') == true)
    {
        all.style.opacity = '1';
    }
    else
    {
        all.style.opacity = '0';
    }
    
}

