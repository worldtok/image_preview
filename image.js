// set variables by getting the elements we want from the html document
const img = document.getElementById('image');
const userImage = document.getElementById('user-image');
const multipleImage = document.getElementById('multiple-image');
let imageclass = document.getElementsByClassName('image');
const imgTag = `<img src="" class="image-tag">`

// event listner for multiple image selection
multipleImage.addEventListener('change', setMultiple);

// event listner for single image selection
userImage.addEventListener('change', setImg);

// function to set multiple images to display to user
function setMultiple() {
    let images = [];
    images = multipleImage.files;
    let imgx = '';
    for (let i = 0; i < images.length; i++) {
        imgx += `<img src="${window.URL.createObjectURL(images[i])}" class="image-tag">`;
    }
    imageclass[0].innerHTML = imgx;
}

// function to set single image to display to user
function setImg() {
    img.src = window.URL.createObjectURL(userImage.files[0]);
}