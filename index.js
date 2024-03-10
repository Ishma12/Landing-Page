
const imageSources = [
    "image/lessons.jpg",
    "image/interactive.jpg",
    "image/progresss.jpg"
];


const approachImage = document.getElementById("approachImage");

let currentIndex = 0;


function changeImage() {
    approachImage.src = imageSources[currentIndex];

    currentIndex = (currentIndex + 1) % imageSources.length;
}

changeImage();

setInterval(changeImage, 1000);
