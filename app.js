const car = document.querySelector(".car");
const carBaseImgUrl = "./img/car";
const aboutBtn = document.querySelector(".about-btn");
const skillBtn = document.querySelector(".skill-btn");
const projectBtn = document.querySelector(".project-btn");
const contactBtn = document.querySelector(".contact-btn");
const infoModal = document.querySelector("info-modal")
const modalTatle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

const carPosition = {
  top: 55,
  left: 50,
};

document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowUp") {
      car.style.backgroundImage = `url(${carBaseImgUrl}Top.png)`;
      if (carPosition.top >= 0) {
        carPosition.top--;
      }
      else {
        carPosition.top++;
      }
    } else if (e.code === "ArrowDown") {
      car.style.backgroundImage = `url(${carBaseImgUrl}Bottom.png)`;
      if (carPosition.top <= 100) {
          carPosition.top++;
        }
        else {
          carPosition.top--;
        }
    } else if (e.code === "ArrowLeft") {
      car.style.backgroundImage = `url(${carBaseImgUrl}Left.png)`;
      if (carPosition.left >= 0) {
          carPosition.left--;
        }
        else {
          carPosition.left++;
        }
    } else if (e.code === "ArrowRight") {
      car.style.backgroundImage = `url(${carBaseImgUrl}Right.png)`;
      if (carPosition.left <= 100) {
          carPosition.left++;
        }
        else {
          carPosition.left--;
        }
    }
  car.style.top = String(carPosition.top) + "%";
  car.style.left = String(carPosition.left) + "%";

  if (carPosition.top < 40 &&
    carPosition.left < 35 ){
    aboutBtn.click();
  } else if (carPosition.top < 40 &&
    carPosition.left > 65){
    skillBtn.click();
  } else if (carPosition.top > 60 &&
    carPosition.left < 35){
    projectBtn.click();
  } else if (carPosition.top > 60 &&
    carPosition.left > 65 ){
    contactBtn.click();
  }
});

aboutBtn.addEventListener("click", function (e) {
  modalTatle.textContent = aboutBtn.textContent;
  modalBody.innerHTML = `
    <h1> 송강산 </h1>
    <div>전북대학교 전자공학부 졸업</div>
    <div>SSAFY Embedded Track</div>
  `;
});

skillBtn.addEventListener("click", function (e) {
  modalTatle.textContent = skillBtn.textContent;
  modalBody.innerHTML = `
    <div>PYTHON</div>
    <div>JAVASCRIPT</div>
    <div>C++</div>
  `;
});

projectBtn.addEventListener("click", function (e) {
  modalTatle.textContent = projectBtn.textContent;
  modalBody.innerHTML = `
    <div>Portfolio</div>
    <div>Mincoding</div>
    <div>RC카 제작</div>
  `;
});

contactBtn.addEventListener("click", function (e) {
  modalTatle.textContent = contactBtn.textContent;
  modalBody.innerHTML = `
    <div>email : rkdtks0816@naver.com</div>
    <div>phone : 010-5054-3624</div>
    <div>instagram : __rkdtks_</div>
  `;
});
