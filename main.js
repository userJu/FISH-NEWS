// Breaking button click event
const leftBtn = document.querySelector(".breakings_leftBtn");
const rightBtn = document.querySelector(".breakings_rightBtn");
const breaking = document.querySelector(".breaking");

let i = 0;

leftBtn.addEventListener("click", () => {
  i++;
  if (i > 3) {
    or = 3 - (i % 4);
    // deleteBreaking()
    changeBreaking(or);
  } else {
    or = 3 - i;
    // deleteBreaking()
    changeBreaking(or);
  }
});
rightBtn.addEventListener("click", () => {
  rightBtnActive();
});

imgArray = ["1.png", "2.png", "3.jpg", "4.jpg"];
txtArray = [
  `Gilderoy Lockhart, six solid months at the top of the best seller list was in Flourish and Blotts yesterday signing his new book "Magical Me". The bookstore was crammed full of admiring fans most of which were women. Gilderoy Lockhart Wizard Extraordinaire, bewitches and bedazzles us yet again with another toe-nail-bitting account of his heroic encounters with the dark side. Wrestled with werewolves, defied demons, battled bests, Gilderoy's bewildering bravery never ceases to amaze in this magical masterpiece.[10]`,
  `The female Muggle communicated, via a machine called Telephone, the Muggle Crime Watchers Hotline, and immediately the Ministry of Magic Witch Watchers was informed. Minister Cornelius Fudge was taken by surprise and sent hundreds of Witch Watcher Special Forces to the Village, but when they arrived there he was gone. Minister was absolutely disappointed to lose Sirius Black. The situation got worse when hundreds of Dementors turned up making the small Dufftown population quiver in panic. It took more than 4 hours for the Special Force to tranquillise what was a great shock for those […]`,
  `Miss Granger, a plain but ambitious girl, seems to be developing a taste for famous wizards. Her latest prey, sources report, is none other than the Bulgarian Bonbon Viktor Krum. No word yet on how Harry Potter is taking this latest emotional blow.[18]`,
  `Sturgis Podmore, 38, of number two, Laburnum Gardens, Clapham, has appeared in front of the Wizengamot charged with trespass and attempted robbery at the Ministry of Magic on 31 August. Podmore was arrested by Ministry of Magic watchwizard Eric Munch, who found him attempting to force his way through a top-security door at one o'clock in the morning. Podmore, who refused to speak in his own defence, was convicted on both charges and sentence to six months in Azkaban.`,
];

// Add more breakings
const image = document.createElement("img");
const breakingInfo = document.querySelector(".breaking__info");
const span = document.createElement("span");
const h2 = document.createElement("h2");
// add more breakings function
function changeBreaking(or) {
  image.classList = "breaking__img";
  breaking.appendChild(image);
  image.src = `images/breaking/breaking${imgArray[or]}`;

  breakingInfo.prepend(span);
  span.innerText = txtArray[or].slice(1);
  span.prepend(h2);
  h2.innerText = txtArray[or].substr(0, 1);
}
changeBreaking(0);

// // delete breakings
// function deleteBreaking(){
//     const image = document.querySelector(".breaking__img")
//     const span = breaking.querySelector('span')
//     image.remove()
//     span.remove()
// }

function rightBtnActive() {
  i++;
  if (i > 3) {
    or = i % 4;
    // deleteBreaking()
    changeBreaking(or);
  } else {
    or = i;
    // deleteBreaking()
    changeBreaking(or);
  }
}

// Breaking automaticly swipe
const autoBreakingChange = setInterval(rightBtnActive, 4000);

//Main left 'gentleman's fashion' button click event
const mainImage = document.querySelector(".mainNews__items");
const mainItems = document.querySelector(".mainItems");
mainItems.addEventListener("click", (e) => {
  const target =
    e.target.dataset.value !== undefined
      ? e.target.dataset.value
      : e.target.removeEventListener();
  const image = document.createElement("img");
  image.src = `images/${target}.png`;
  image.classList = "mainNews__left_img";
  deleteImg();
  mainImage.prepend(image);

  activeBtn(e);
});

//delete left img
function deleteImg() {
  const image = mainImage.querySelector("img");
  image.remove();
}

// click => style btn
function activeBtn(e) {
  const h3 = mainItems.querySelectorAll("h3");
  h3.forEach((item) => {
    item.classList.remove("active");
  });
  const target = e.target;
  target.classList.add("active");
}

//ad
//동화책 이미지를 클릭하면 일정한 크기의 팝업창을 띄운다(동화책 info를 담은)

const items = document.querySelector(".ad__items");
items.addEventListener("click", (e) => {
  const target = e.target.dataset.item;
  const popupImg = document.createElement("img");
  popupImg.setAttribute("src", `images/ads/item${target}.png`);
  console.log(popupImg);
});
