var date = new Date()  


if(date.getHours > 5)
{
    document.body.style.backgroundColor = 'blue'
    alert("Good Morning")
}

else if(date.getHours > 12 && date.getHours < 18)
{
    document.body.style.backgroundColor = 'red'
    alert("Good Afternoon")
}

else{
    document.body.style.backgroundColor = 'green'
    alert("Good Evenning")

}




