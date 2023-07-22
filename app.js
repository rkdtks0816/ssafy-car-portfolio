const car = document.querySelector(".car");
const carBaseImgUrl = "./img/car";

const arrowUpController = document.querySelector(".arrow-up-controller");
const arrowLeftController = document.querySelector(".arrow-left-controller");
const arrowRightController = document.querySelector(".arrow-right-controller");
const arrowDownController = document.querySelector(".arrow-down-controller");

const aboutArea = document.querySelector(".about-area");
const skillArea = document.querySelector(".skill-area");
const projectArea = document.querySelector(".project-area");
const contactArea = document.querySelector(".contact-area");

const infoModal = document.getElementById("infoModal");
const bootstrapModal = new bootstrap.Modal(infoModal, {});
const modalTatle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

const carPosition = {
  top: 50,
  left: 50,
};

let modalTatleText = "";
let modalBodyHTML = "";

const checkCarPosition = function () {
;  if (carPosition.top < 35 && carPosition.left < 33) {
    aboutArea.style.backgroundColor = "#CBCBCB"
    modalTatleText = "ABOUT";
    modalBodyHTML = `
      <h1> 송강산 </h1>
      <div>전북대학교 전자공학부 졸업</div>
      <div>SSAFY Embedded Track</div>
    `;
    modalTatle.textContent = modalTatleText;
    modalBody.innerHTML = modalBodyHTML;
    bootstrapModal.show();
  } else if (carPosition.top < 35 && carPosition.left > 67) {
    modalTatleText = "SKILL";
    modalBodyHTML = `
      <div>PYTHON</div>
      <div>JAVASCRIPT</div>
      <div>C++</div>
    `;
    modalTatle.textContent = modalTatleText;
    modalBody.innerHTML = modalBodyHTML;
    bootstrapModal.show();
  } else if (carPosition.top > 65 && carPosition.left < 33) {
    modalTatleText = "PROJECT";
    modalBodyHTML = `
      <div>Portfolio</div>
      <div>Mincoding</div>
      <div>RC카 제작</div>
    `;
    modalTatle.textContent = modalTatleText;
    modalBody.innerHTML = modalBodyHTML;
    bootstrapModal.show();
  } else if (carPosition.top > 65 && carPosition.left > 67) {
    modalTatleText = "CONTACT";
    modalBodyHTML = `
      <div>email : rkdtks0816@naver.com</div>
      <div>phone : 010-5054-3624</div>
      <div>instagram : __rkdtks_</div>
    `;

    modalTatle.textContent = modalTatleText;
    modalBody.innerHTML = modalBodyHTML;
    bootstrapModal.show();
  } else {
    aboutArea.style.backgroundColor = "#FFF"
    bootstrapModal.hide();
  }
};

arrowUpController.addEventListener("click", function (e) {
  car.style.backgroundImage = `url(${carBaseImgUrl}Top.png)`;
  if (carPosition.top >= 12) {
    carPosition.top--;
  }

  car.style.top = String(carPosition.top) + "%";

  checkCarPosition();
});
arrowLeftController.addEventListener("click", function (e) {
  car.style.backgroundImage = `url(${carBaseImgUrl}Left.png)`;
  if (carPosition.left >= 7) {
    carPosition.left -= 2;
  }

  car.style.left = String(carPosition.left) + "%";

  checkCarPosition();
});
arrowRightController.addEventListener("click", function (e) {
  car.style.backgroundImage = `url(${carBaseImgUrl}Right.png)`;
  if (carPosition.left <= 93) {
    carPosition.left += 2;
  }

  car.style.left = String(carPosition.left) + "%";

  checkCarPosition();
});
arrowDownController.addEventListener("click", function (e) {
  car.style.backgroundImage = `url(${carBaseImgUrl}Bottom.png)`;
  if (carPosition.top <= 88) {
    carPosition.top++;
  }

  car.style.top = String(carPosition.top) + "%";

  checkCarPosition();
});

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowUp") {
    car.style.backgroundImage = `url(${carBaseImgUrl}Top.png)`;
    if (carPosition.top >= 12) {
      carPosition.top--;
    }
  } else if (e.code === "ArrowLeft") {
    car.style.backgroundImage = `url(${carBaseImgUrl}Left.png)`;
    if (carPosition.left >= 7) {
      carPosition.left -= 2;
    }
  } else if (e.code === "ArrowRight") {
    car.style.backgroundImage = `url(${carBaseImgUrl}Right.png)`;
    if (carPosition.left <= 93) {
      carPosition.left += 2;
    }
  } else if (e.code === "ArrowDown") {
    car.style.backgroundImage = `url(${carBaseImgUrl}Bottom.png)`;
    if (carPosition.top <= 88) {
      carPosition.top++;
    }
  }
  car.style.top = String(carPosition.top) + "%";
  car.style.left = String(carPosition.left) + "%";

  checkCarPosition();
});