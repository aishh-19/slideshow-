let i = 0;
let images = [];
let time = 1000 ;

images[0] = 'https://picsum.photos/200/300';
images[1] = 'https://picsum.photos/200/300';
images[2] = 'https://picsum.photos/200/300';
images[3] = 'https://picsum.photos/200/300';
images[4] = 'https://picsum.photos/200/300';

function changeSlide() {
    document.querySelector(".slide").src = images[i];
 if(i < images.length-1){
    i++;
 }else{
    i = 0 ;
 }
    setTimeout("changeSlide()", time);
}

window.onload = changeSlide;
