// console.log('%c HI', 'color: firebrick')
// global scope
// Challenge 1
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
// use let since we need to change the value
let breedsArray;

// Event Listeners
ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)


// Challenge 1
function getImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderImg(imgsArray)
    })
}

function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}

function renderImg(imgsArray){
    imgsArray.forEach(element => {
        renderImg(element)
    })
}

function renderElement(element){
    ulContainer.innerHTML += element
}



// Challenge 2
function getBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
    })
}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

// Remember to invoke the function!
// getImages()
getBreeds()


// Challenge 3
function handleClick(event){
    // toggle colors
    if (event.target.nodeName === 'LI'){
        if (event.target.style.color === 'red'){
            event.target.style.color = 'black'
        } else {
            event.target.style.color = 'red'
        }
    }
}


// Challenge 4
function handleChange(event) {
    // debugger;
    const letter = event.target.value
   
    // filter out the breeds that start with the letter
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    // append to the DOM
    const filteredBreedsLis = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)
}