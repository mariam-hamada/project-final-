const initSlider= () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth ;

slideButtons.forEach(button => {
button.addEventListener("click" , () => {
 const direction = button.id === "prev-slide" ? -1 : 1;
 const scrollamount = imageList.clientWidth * direction;
 imageList.scrollBy({left: scrollamount,behavior:"smooth"});
});
    
});

    const handleSlideButtons = () => {
        slideButtons[0].Style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? "none" : "block";

    }
    imageList.addEventListener("scroll",()=> {
        handleSlideButtons();
    });

}


window.addEventListener("load",initSlider);