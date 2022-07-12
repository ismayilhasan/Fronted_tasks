let form = document.querySelector('#form')


form.addEventListener('submit',() => {
   let input_username = document.querySelector('#username').value
   let input_password = document.querySelector('#password').value
   let input_email = document.querySelector('#email').value
   let email_validation =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   let first_letter = input_username.slice(0,1)
   if(input_username === '' || input_password === '' || input_email === '')
   {
      alert('Please fill inputs')
   }

   if(first_letter != first_letter.toUpperCase())
   {
      alert('first charcter of username must be uppercase')
   }
   
   if(input_password.length <= 6)
   {
      alert('password have to more over 6 character')
   }
   
   let email_result = email_validation.test(input_email)

   if(email_result == false)  
   {
      alert('please enter corrcet email')
   }

})


