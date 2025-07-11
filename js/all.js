"use strict";
AOS.init({
    duration: 300,
    easing: 'ease-in-out',
    delay: 0,
    offset: 0,
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});
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

// Funcionalidade para as abas da seção "Conheça Nossas Áreas"
function initializeAreasTabs() {
    var areasTabs = document.querySelectorAll(".areas-tab");
    var areasContents = document.querySelectorAll(".areas-content");
    
    console.log("Iniciando abas das áreas...", areasTabs.length, areasContents.length);
    
    for (var i = 0; i < areasTabs.length; i++) {
        areasTabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            var targetArea = this.getAttribute("data-area");
            console.log("Clicou na aba:", targetArea);
            
            // Remove active class from all tabs
            for (var j = 0; j < areasTabs.length; j++) {
                areasTabs[j].classList.remove("active");
            }
            
            // Add active class to clicked tab
            this.classList.add("active");
            
            // Hide all content areas
            for (var k = 0; k < areasContents.length; k++) {
                areasContents[k].classList.remove("active");
            }
            
            // Show target content area
            var targetContent = document.getElementById(targetArea + "-content");
            console.log("Procurando elemento:", targetArea + "-content", targetContent);
            if (targetContent) {
                targetContent.classList.add("active");
                console.log("Conteúdo ativado para:", targetArea);
                
                // Reset ALL AOS animations first
                var allAosElements = document.querySelectorAll('[data-aos]');
                for (var n = 0; n < allAosElements.length; n++) {
                    allAosElements[n].classList.remove('aos-animate');
                }
                
                // Force refresh AOS multiple times to ensure detection
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                    
                    // Wait and refresh again
                    setTimeout(function() {
                        AOS.refresh();
                    }, 50);
                    
                    // Final refresh to trigger animations
                    setTimeout(function() {
                        AOS.refresh();
                        console.log('AOS refresh final executado para área:', targetArea);
                    }, 150);
                }
                
            } else {
                console.error("Elemento não encontrado:", targetArea + "-content");
            }
        });
    }
}

// Função para garantir que o AOS detecte todos os elementos
function ensureAOSDetection() {
    console.log('Iniciando detecção AOS...');
    
    // Temporariamente mostra todos os elementos AOS para que sejam detectados
    var allAreasContent = document.querySelectorAll('.areas-content');
    
    // Faz todos os conteúdos ficarem visíveis temporariamente, sobrescrevendo o !important
    for (var i = 0; i < allAreasContent.length; i++) {
        allAreasContent[i].style.setProperty('display', 'block', 'important');
        allAreasContent[i].style.setProperty('visibility', 'visible', 'important');
    }
    
    // Refresh AOS para detectar todos os elementos
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
        console.log('AOS refresh executado');
    }
    
    // Restaura a visibilidade original após um pequeno delay
    setTimeout(function() {
        for (var j = 0; j < allAreasContent.length; j++) {
            if (!allAreasContent[j].classList.contains('active')) {
                allAreasContent[j].style.removeProperty('display');
                allAreasContent[j].style.removeProperty('visibility');
            }
        }
        console.log('Visibilidade restaurada');
    }, 100);
}

// Executa em diferentes momentos para garantir que funcione
setTimeout(initializeAreasTabs, 500);
setTimeout(initializeAreasTabs, 1500);
setTimeout(initializeAreasTabs, 3000);

// Executa a detecção do AOS após o carregamento
setTimeout(ensureAOSDetection, 1000);
setTimeout(ensureAOSDetection, 2000);

// ARQUIVO JS ALL.JS CARREGADO

// UNIFICADO - DOM Ready com AOS e Typewriter
document.addEventListener('DOMContentLoaded', function() {
    console.log('📋 DOM CARREGADO - UNIFICADO');
    
    // Configuração AOS (código original)
    setTimeout(function() {
        ensureAOSDetection();
        console.log('AOS configurado no DOMContentLoaded');
    }, 500);
    
    // AOS configurações originais mantidas
    console.log('🔍 CONFIGURANDO AOS...');
});

// Window Load unificado
window.addEventListener('load', function() {
    console.log('🌐 WINDOW LOAD - UNIFICADO');
    
    // AOS (código original)
    setTimeout(function() {
        ensureAOSDetection();
        console.log('AOS configurado no window load');
    }, 500);
    
    // Window load configurações originais mantidas
    console.log('🔄 WINDOW LOAD CONFIGURADO');
});

// Final do arquivo
