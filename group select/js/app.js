
function sum(){
    var input = document.getElementById('group').value;
    var day =  input.slice(-3,-2);
    
    if(input == 1)
    {
        document.write(`your group ${input} and morning your lesson sAart`)
        document.body.style.backgroundColor = 'yellow'
    }
    else if(input == 2)
    {
        document.write(`your group ${input} and afternoon your lesson sAart`)
        document.body.style.backgroundColor = 'red'
    }
    else
    {
        document.write(`your group ${input} and evening your lesson sAart`)
        document.body.style.backgroundColor = 'black'
    }
}
// if(input )