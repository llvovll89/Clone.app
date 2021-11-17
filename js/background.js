// img 폴더와  name이 같게 적기 //
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;