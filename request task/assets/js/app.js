let btn_send = document.querySelector('#btn_send')

btn_send.addEventListener('click',() => {

    fetch("students.json")
    .then(response => response.json())
    .then(data => {
        let item = '';
        data.forEach(x => {
            item+= `
            
            <div class="col-lg-3 col-6">
            <div class="card my-4" style="width: 18rem;">
              <img src="${x.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${x.fullname}</h5>
                <p class="card-text">${x.profession}</p>

              </div>
            </div>
          </div>
            
            `
        });

        document.querySelector("#list").innerHTML = item
    })
    .catch(erroe => console.log(error))

})