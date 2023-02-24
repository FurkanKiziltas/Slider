let models = [
    {
        name: "BMW 418d",
        image: "img/bmw.jpg"
    },
    {
        name: "VOLVO S60",
        image: "img/volvo.jpg"
    },
    {
        name: "MAZDA CX-3",
        image: "img/mazda.jpg"
    },
    {
        name: "HONDA CIVIC",
        image: "img/honda.jpg"
    },
    {
        name: "SKODA SUPERB",
        image: "img/skoda.jpg"
    }
];

let index = 0;
let slideCount = models.length;

slideShow(index);

document.querySelector(".fa-arrow-left").addEventListener("click", function(){
    index --;
    slideShow(index);
});
document.querySelector(".fa-arrow-right").addEventListener("click", function(){
    index ++;
    slideShow(index);
});

function slideShow(i){
    index = i;
    if(i<0){
        index = slideCount -1;
    }
    if(i>=slideCount){
        index = 0;
    }
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-image-top").setAttribute("src", models[index].image);
};
