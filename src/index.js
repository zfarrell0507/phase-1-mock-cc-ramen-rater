let rating = document.querySelector('#rating-display')


fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramens => {
        cookRamens(ramens)
        ramenInfo(ramens[0])
        newRamenForm()
    })

function cookRamens(ramens) {
    ramens.forEach(ramen => {
        let image = document.createElement('img')
        image.src = ramen.image
        let imageArray = document.querySelector('#ramen-menu')
        imageArray.append(image)
        image.addEventListener('click', () => ramenInfo(ramen))
    })
}
function ramenInfo(ramen) {
    //let div = document.querySelector('ramen-detail')
    let imgInfo = document.querySelector('img.detail-image')
    imgInfo.src = ramen.image
    let name = document.querySelector('h2.name')
    name.textContent = ramen.name
    let restaurant = document.querySelector('h3.restaurant')
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    let comment = document.querySelector('p#comment-display')
    comment.textContent = ramen.comment
    //console.log(imgInfo)
}
const nameInput = document.getElementById('new-name')
const restaurantInput = document.getElementById('new-restaurant')
const imageInput = document.getElementById('new-image')
const ratingInput = document.getElementById('new-rating')
const commentInput = document.getElementById('new-comment')
function newRamenForm() {
    let ramenForm = document.querySelector('form#new-ramen')
    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        

    })
}