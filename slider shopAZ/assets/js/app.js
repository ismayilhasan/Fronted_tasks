// VARIABLES - START
var sources = [
   "assets/photos/electronics.jpg",
   "assets/photos/books.png" ,
   "assets/photos/oil.jpg"
]
let currentSlide = 0;
let img = document.querySelector(".slider img")
let previous = document.querySelector("#prev")
let next = document.querySelector("#next")
img.src = sources[currentSlide]
let dots = document.querySelectorAll('.dots i')

// VARIABLES - END




next.addEventListener('click',() => {
   currentSlide++
   if(currentSlide > sources.length - 1)
   {
      currentSlide = 0; 
   }
   img.src = sources[currentSlide]



})

previous.addEventListener('click',() => {
   currentSlide--
   if(currentSlide === -1)
   {
      currentSlide = sources.length - 1
   }

   img.src = sources[currentSlide]
   
})


for (let dot of dots) {
   dot.addEventListener('click', () => {
      let active = document.querySelector('.active')

      active.classList.remove('active')
      dot.classList.add('active')  

     let index =  dot.getAttribute('id')

     if(index == 1)
     {
       img.src = sources[0]
     }
      if(index == 2)
      {
      img.src = sources[1]
     }
     if(index == 3) {
      img.src = sources[2]
     }

   })
}

function Autoplay(){
   currentSlide ++
   if(currentSlide > sources.length - 1)
   {
      currentSlide = 0
   }
   img.src = sources[currentSlide]

}

setInterval(() => {
   Autoplay();
},4000)




