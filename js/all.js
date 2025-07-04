"use strict";
AOS.init();
var menuList = document.querySelector(".header-nav"),
menuOpen = document.querySelector("#js-open"),
menuClose = document.querySelector("#js-close"),
menuItem = document.querySelectorAll(".item-list");
menuOpen.addEventListener("click", function () {
menuList.classList.add("show"), menuClose.classList.remove("d-none"),
menuOpen.classList.add("d-none")
}), menuClose.addEventListener("click", function () {
menuList.classList.remove("show"), menuClose.classList.add("d-none"),
menuOpen.classList.remove("d-none")
});
for (var _loop = function (e) {
menuItem[e].addEventListener("click", function () {
console.log("you clicked region number " + e), menuList.classList
.remove("show"), menuClose.classList.add("d-none"), menuOpen
.classList.remove("d-none")
})
}, i = 0; i < menuItem.length; i++) _loop(i);
var swiper = new Swiper(".first-slide", {
slidesPerView: 1.3,
spaceBetween: 30,
pagination: {
el: ".swiper-pagination",
clickable: !0
},
breakpoints: {
768: {
slidesPerView: 3
}
}
}),
swiperBenefits = new Swiper(".benefits-slide", {
slidesPerView: 2.1,
spaceBetween: 12
}),
swiperTiktok = new Swiper(".tiktok-slide", {
initialSlide: 1,
slidesPerView: 1,
spaceBetween: 0,
centeredSlides: !0,
navigation: {
nextEl: ".swiper-button-next.ttk-btn",
prevEl: ".swiper-button-prev.ttk-btn"
},
breakpoints: {
768: {
slidesPerView: 3
}
}
});
swiperTiktok.on("slideChange", function () {
var e = document.querySelectorAll(".iframe-video");
Array.prototype.forEach.call(e, function (e) {
e.contentWindow.postMessage(
'{"event":"command","func":"pauseVideo","args":""}', "*")
})
});
var swiperStories = new Swiper(".stories-slide", {
slidesPerView: 1.2,
spaceBetween: 30,
breakpoints: {
768: {
slidesPerView: 2.2
},
992: {
slidesPerView: 4
}
},
navigation: {
nextEl: ".svt-next",
prevEl: ".svt-prev"
}
});
swiperStories.on("slideChange", function () {
var e = document.querySelectorAll(".iframe-video");
Array.prototype.forEach.call(e, function (e) {
e.contentWindow.postMessage(
'{"event":"command","func":"pauseVideo","args":""}', "*")
})
}), document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".razoes-item")
.forEach(function (e) {
e.addEventListener("mouseover", function () {
var e = document.querySelectorAll(".razoes-not-ativo"),
t = document.querySelectorAll(".razoes-ativo");
e.forEach(function (e) {
e.classList.remove("razoes-not-ativo")
}), t.forEach(function (e) {
e.classList.remove("razoes-ativo")
}), this.classList.add("razoes-ativo")
})
})
});
var menuBrasil = document.querySelector("#js-brasil"),
imgBrasil = document.querySelector("#js-img-brasil"),
textBrasil = document.querySelector("#js-text-brasil"),
menuMundo = document.querySelector("#js-mundo"),
imgMundo = document.querySelector("#js-img-mundo"),
textMundo = document.querySelector("#js-text-mundo"),
novoLeft = "./images/arrow-left-not.png",
oldLeft = "./images/arrow-left-a.png",
novoRight = "./images/arrow-right-not.png",
oldRight = "./images/arrow-right-a.png";
imgBrasil.addEventListener("click", function () {
menuBrasil.classList.add("active"), menuMundo.classList.remove("active"),
textBrasil.classList.remove("d-none"), textMundo.classList.add(
"d-none"), imgBrasil.src = oldLeft, imgMundo.src = novoRight, AOS
.refresh()
}), imgMundo.addEventListener("click", function () {
menuMundo.classList.add("active"), menuBrasil.classList.remove("active"),
textMundo.classList.remove("d-none"), textBrasil.classList.add(
"d-none"), imgMundo.src = oldRight, imgBrasil.src = novoLeft, AOS
.refresh()
});
var listBlack = document.querySelector("#js-list-black"),
listRed = document.querySelector("#js-list-red"),
itemBlack = document.querySelector(".item-list-black"),
itemRed = document.querySelector(".item-list-red");
listBlack.addEventListener("click", function () {
listBlack.classList.toggle("active"), listRed.classList.remove("active"),
itemBlack.classList.toggle("d-none"), itemRed.classList.add("d-none"),
conteudos.forEach(function (e) {
e.style.display = "none"
})
}), listRed.addEventListener("click", function () {
listBlack.classList.remove("active"), listRed.classList.toggle("active"),
itemBlack.classList.add("d-none"), itemRed.classList.toggle("d-none"),
conteudos.forEach(function (e) {
e.style.display = "none"
})
});
var conteudos = document.querySelectorAll(".conteudo"),
tabs = document.querySelectorAll(".tab");

function abrirAba(e) {
conteudos.forEach(function (e) {
e.style.display = "none"
});
var t = document.getElementById(e),
s = document.getElementById("js-" + e);
t.style.display = "block", tabs.forEach(function (e) {
e.classList.remove("active")
}), s.classList.add("active")
}
var corpSantander = document.querySelector("#js-corp-santander"),
corp2 = document.querySelector("#js-corp-2"),
corp3 = document.querySelector("#js-corp-3"),
descSantander = document.querySelector("#js-santander"),
desc2 = document.querySelector("#js-empresa-2"),
desc3 = document.querySelector("#js-empresa-3");
corpSantander.addEventListener("click", function () {
corpSantander.classList.add("active"), corp2.classList.remove("active"),
corp3.classList.remove("active"), descSantander.classList.remove(
"d-none"), desc2.classList.add("d-none"), desc3.classList.add(
"d-none"), AOS.refresh()
}), corp2.addEventListener("click", function () {
corpSantander.classList.remove("active"), corp2.classList.add("active"),
corp3.classList.remove("active"), descSantander.classList.add("d-none"),
desc2.classList.remove("d-none"), desc3.classList.add("d-none"), AOS
.refresh()
}), corp3.addEventListener("click", function () {
corpSantander.classList.remove("active"), corp2.classList.remove(
"active"), corp3.classList.add("active"), descSantander.classList.add(
"d-none"), desc2.classList.add("d-none"), desc3.classList.remove(
"d-none"), AOS.refresh()
});
