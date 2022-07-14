let search_div = document.querySelector('#search')
let search_div_phone = document.querySelector('#search_phone')
let close_input = document.querySelector('#close')
let language_div = document.querySelector('#language')
let menu_bar = document.querySelector('#menu_bar')
let arrow_menu = document.querySelector('.left')
let language_div_pc = document.querySelector('#languages_div_pc')


language_div_pc.addEventListener('click',() => {
   let languages_pc = document.querySelector('#languages_PC')
   let language_pc_arrow = document.querySelector('#pc_language_icons')
   languages_pc.classList.toggle('active')
   language_pc_arrow.classList.toggle('rotate')
})

arrow_menu.addEventListener('click',() => {
   let content_menu = document.querySelector('#left_menu') 
   let icon_arrow = document.querySelector('#left_down')
   content_menu.classList.toggle('active')
   icon_arrow.classList.toggle('rotate')
})
menu_bar.addEventListener('click',() => {
   let content = document.querySelector('#menu_icon_content')
 
 
   content.classList.toggle('d-block')
   

})

language_div.addEventListener('click',() => {
   let languages = document.querySelector('.languages')

   languages.classList.toggle('active')

   let icon_arrow = document.querySelector('#arrow')

   icon_arrow.classList.toggle('rotate')
})

search_div_phone.addEventListener('click',() => {
   let header1 = document.querySelector('#header_PC2')
   let header2 = document.querySelector('#header3')
   let input_div = document.querySelector('.search-input')
   let input = document.querySelector('.search-input input')
   header1.style.display = 'none'
   header2.style.display = 'none'

   input_div.style.display = 'block'

   input.style.width = '100%'


})




search_div.addEventListener('click',() => {
   let header1 = document.querySelector('#header_PC2')
   let header2 = document.querySelector('#header3')
   let input_div = document.querySelector('.search-input')
   let input = document.querySelector('.search-input input')
   header1.style.display = 'none'
   header2.style.display = 'none'

   input_div.style.display = 'block'

   input.style.width = '100%'




})

close_input.addEventListener('click',() => {
  
   let header1 = document.querySelector('#header_PC2')
   let header2 = document.querySelector('#header3')
   let input_div = document.querySelector('.search-input')
   let input = document.querySelector('.search-input input')
   header1.style.display = 'block'
   header2.style.display = 'none'

   input_div.style.display = 'none'

   input.style.width = '0'

})



