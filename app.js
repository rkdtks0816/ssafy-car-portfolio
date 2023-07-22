const car = document.querySelector(".car");
const carBaseImgUrl = "./img/car";

const aboutArea = document.querySelector(".about-area");
const skillArea = document.querySelector(".skill-area");
const projectArea = document.querySelector(".project-area");
const contactArea = document.querySelector(".contact-area");

const arrowUpController = document.querySelector(".arrow-up-controller");
const arrowLeftController = document.querySelector(".arrow-left-controller");
const arrowRightController = document.querySelector(".arrow-right-controller");
const arrowDownController = document.querySelector(".arrow-down-controller");

const infoModal = document.getElementById("infoModal");
const bootstrapModal = new bootstrap.Modal(infoModal, {});
const modalTatle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

const carPosition = {
  top: 50,
  left: 50,
};

const modalContent = {
  aboutTitle : "ABOUT",
  aboutBody : `
    <h1> 송강산 </h1>
    <div>전북대학교 전자공학부 졸업</div>
    <div>SSAFY Embedded Track</div>
  `,
  skillTitle : "SKILL",
  skillBody : `
    <div>PYTHON</div>
    <div>JAVASCRIPT</div>
    <div>C++</div>
  `,
  projectTitle : "PROJECT",
  projectBody : `
    <div>Portfolio</div>
    <div>Mincoding</div>
    <div>RC카 제작</div>
  `,
  contactTitle : "CONTACT",
  contactBody : `
    <div>email : rkdtks0816@naver.com</div>
    <div>phone : 010-5054-3624</div>
    <div>instagram : __rkdtks_</div>
  `
}

const showAboutModal = function () {
  modalTatle.textContent = modalContent.aboutTitle;
  modalBody.innerHTML = modalContent.aboutBody;
  bootstrapModal.show();
}
const showSkillModal = function () {
  modalTatle.textContent = modalContent.skillTitle;
  modalBody.innerHTML = modalContent.skillBody;
  bootstrapModal.show();
}
const showProjectModal = function () {
  modalTatle.textContent = modalContent.projectTitle;
  modalBody.innerHTML = modalContent.projectBody;
  bootstrapModal.show();
}
const showContactModal = function () {
  modalTatle.textContent = modalContent.contactTitle;
  modalBody.innerHTML = modalContent.contactBody;
  bootstrapModal.show();
}

const checkCarPosition = function () {
  if (carPosition.top < 35 && carPosition.left < 33) {
    aboutArea.style.backgroundColor = "#CBCBCB";
    showAboutModal();
  } else if (carPosition.top < 35 && carPosition.left > 67) {
    skillArea.style.backgroundColor = "#CBCBCB";
    showSkillModal();
  } else if (carPosition.top > 65 && carPosition.left < 33) {
    projectArea.style.backgroundColor = "#CBCBCB";
    showProjectModal();
  } else if (carPosition.top > 65 && carPosition.left > 67) {
    contactArea.style.backgroundColor = "#CBCBCB";
    showContactModal();
  } else {
    aboutArea.style.backgroundColor = "#FFF";
    skillArea.style.backgroundColor = "#FFF";
    projectArea.style.backgroundColor = "#FFF";
    contactArea.style.backgroundColor = "#FFF";
    bootstrapModal.hide();
  }
};

aboutArea.addEventListener("click", function (e) {
  showAboutModal();
})
skillArea.addEventListener("click", function (e) {
  showSkillModal();
})
projectArea.addEventListener("click", function (e) {
  showProjectModal();
})
contactArea.addEventListener("click", function (e) {
  showContactModal();
})

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
    arrowUpController.click();
  } else if (e.code === "ArrowLeft") {
    arrowLeftController.click();
  } else if (e.code === "ArrowRight") {
    arrowRightController.click();
  } else if (e.code === "ArrowDown") {
    arrowDownController.click();
  }
});
