const menu = document.querySelector('#ramen-menu')
const ramenForm = document.getElementById('new-ramen')
let ramensArray = []

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramens => {
        renderRamens(ramens)
        ramenInfo(ramens[0])
        ramensArray = ramens
    })

function renderRamens(ramens) {
    ramens.forEach(ramen => {
        const image = document.createElement('img')
        image.src = ramen.image
        menu.append(image)
        image.addEventListener('click', () => ramenInfo(ramen))
    });
}

function ramenInfo(ramen) {
    const img = document.querySelector('.detail-image')
    img.src = ramen.image
    const name = document.querySelector('h2.name')
    name.textContent = ramen.name
    const restaurant = document.querySelector('h3.restaurant')
    restaurant.textContent = ramen.restaurant
    const rating = document.querySelector('#rating-display')
    rating.textContent = ramen.rating
    const comment = document.getElementById('comment-display')
    comment.textContent = ramen.comment
}
ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    ramensArray.push(newRamen)
    renderRamens(ramensArray)
    console.log(ramensArray)
})