function initCarousel() {
  let leftBtn = document.querySelector(".carousel__arrow_left");
  let rightBtn = document.querySelector(".carousel__arrow_right");
  let carousel = document.querySelector(".carousel__inner");
  rightBtn.addEventListener("click", function() {
    carousel.style.transform = 'translateX(-500px)';
    
  });
  leftBtn.addEventListener("click", function() {
    carousel.style.transform = 'translateX(-1000px)';
  });
};
 