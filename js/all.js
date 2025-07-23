"use strict";
AOS.init({
    duration: 800, // Aumentado para uma transição mais suave
    easing: 'ease-out-cubic', // Alterado para um easing mais suave
    delay: 100, // Pequeno delay para melhor percepção
    offset: 120,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable: 'mobile'
});
var menuList = document.querySelector(".header-nav"),
menuOpen = document.querySelector("#js-open"),
menuClose = document.querySelector("#js-close"),
menuItem = document.querySelectorAll(".item-list");

// Verificar se os elementos do menu existem
if (menuOpen && menuClose && menuList) {
    menuOpen.addEventListener("click", function () {
    menuList.classList.add("show"), menuClose.classList.remove("d-none"),
    menuOpen.classList.add("d-none")
    }), menuClose.addEventListener("click", function () {
    menuList.classList.remove("show"), menuClose.classList.add("d-none"),
    menuOpen.classList.remove("d-none")
    });
}
// Verificar se menuItem existe e tem elementos
if (menuItem && menuItem.length > 0) {
    for (var _loop = function (e) {
    menuItem[e].addEventListener("click", function () {
    menuList.classList
    .remove("show"), menuClose.classList.add("d-none"), menuOpen
    .classList.remove("d-none")
    })
    }, i = 0; i < menuItem.length; i++) _loop(i);
}
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
if (imgBrasil && imgMundo && menuBrasil && menuMundo && textBrasil && textMundo) {
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
}
var listBlack = document.querySelector("#js-list-black"),
listRed = document.querySelector("#js-list-red"),
itemBlack = document.querySelector(".item-list-black"),
itemRed = document.querySelector(".item-list-red");

// Verificar se os elementos existem antes de adicionar event listeners
if (listBlack && listRed && itemBlack && itemRed) {
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
}
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
// Funcionalidade dos botões de benefícios
setTimeout(function() {
    
    var corpSantander = document.getElementById("js-corp-santander");
    var corpAymore = document.getElementById("js-corp-aymore");
    var corp2 = document.getElementById("js-corp-2");
    var corp3 = document.getElementById("js-corp-3");
    var descSantander = document.getElementById("js-benefits-santander");
    var descAymore = document.getElementById("js-empresa-aymore");
    var desc2 = document.getElementById("js-empresa-2");
    var desc3 = document.getElementById("js-empresa-3");

    // Verificar se todos os elementos existem
    if (!corpSantander || !corpAymore || !corp2 || !corp3 || !descSantander || !descAymore || !desc2 || !desc3) {
        return;
    }

    function switchToSantander() {
        corpSantander.classList.add("active");
        corpAymore.classList.remove("active");
        corp2.classList.remove("active");
        corp3.classList.remove("active");
        
        descSantander.classList.remove("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.add("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToAymore() {
        corpSantander.classList.remove("active");
        corpAymore.classList.add("active");
        corp2.classList.remove("active");
        corp3.classList.remove("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.remove("d-none");
        desc2.classList.add("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToF1rst() {
        corpSantander.classList.remove("active");
        corpAymore.classList.remove("active");
        corp2.classList.add("active");
        corp3.classList.remove("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.remove("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToTools() {
        corpSantander.classList.remove("active");
        corpAymore.classList.remove("active");
        corp2.classList.remove("active");
        corp3.classList.add("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.add("d-none");
        desc3.classList.remove("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    // Remover qualquer listener existente e adicionar novos
    corpSantander.onclick = switchToSantander;
    corpAymore.onclick = switchToAymore;
    corp2.onclick = switchToF1rst;
    corp3.onclick = switchToTools;
}, 1000);

// Função para reativar event listeners dos botões clonados
function reactivateButtonListeners(container) {
    // Abordagem 1: Tentar executar onclick diretamente nos botões existentes
    var allButtons = container.querySelectorAll('button');
    console.log('Encontrados ' + allButtons.length + ' botões no container');
    
    for (var i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];
        var onclickValue = button.getAttribute('onclick');
        
        if (onclickValue) {
            console.log('Botão com onclick encontrado:', onclickValue);
            
            // Abordagem simples: forçar onclick a funcionar
            (function(btn, onclick) {
                btn.addEventListener('click', function(e) {
                    console.log('Clique detectado! Executando:', onclick);
                    
                    // Método 1: Tentar executar eval
                    try {
                        eval(onclick);
                        return;
                    } catch (e1) {
                        console.log('Eval falhou, tentando método 2:', e1);
                    }
                    
                    // Método 2: Tentar executar função window
                    try {
                        var funcName = onclick.replace('()', '').trim();
                        if (typeof window[funcName] === 'function') {
                            window[funcName]();
                            return;
                        }
                    } catch (e2) {
                        console.log('Window function falhou, tentando método 3:', e2);
                    }
                    
                    // Método 3: Chamar funções conhecidas diretamente
                    if (onclick.includes('scrollToNextQuestion') && typeof scrollToNextQuestion === 'function') {
                        scrollToNextQuestion();
                    } else if (onclick.includes('scrollToThirdQuestion') && typeof scrollToThirdQuestion === 'function') {
                        scrollToThirdQuestion();
                    } else if (onclick.includes('scrollToFourthQuestion') && typeof scrollToFourthQuestion === 'function') {
                        scrollToFourthQuestion();
                    } else if (onclick.includes('scrollToFifthQuestion') && typeof scrollToFifthQuestion === 'function') {
                        scrollToFifthQuestion();
                    } else if (onclick.includes('scrollBackToTop') && typeof scrollBackToTop === 'function') {
                        scrollBackToTop();
                    } else {
                        console.error('Nenhum método funcionou para:', onclick);
                    }
                });
            })(button, onclickValue);
        }
    }
    
    // Abordagem 2: Também tentar forçar clique nos botões originais se disponíveis
    var moreButtons = container.querySelectorAll('.btn-more-info');
    console.log('Encontrados ' + moreButtons.length + ' botões .btn-more-info específicos');
    
    for (var j = 0; j < moreButtons.length; j++) {
        var moreBtn = moreButtons[j];
        if (!moreBtn.getAttribute('data-listener-added')) {
            moreBtn.setAttribute('data-listener-added', 'true');
            
            moreBtn.addEventListener('click', function(e) {
                console.log('Clique direto em btn-more-info detectado!');
                var onclick = this.getAttribute('onclick');
                if (onclick) {
                    try {
                        eval(onclick);
                    } catch (error) {
                        console.error('Erro ao executar onclick direto:', error);
                    }
                }
            });
        }
    }
}

// Função para lidar com mudanças de tamanho da tela
function handleResizeForAreas() {
    var activeTab = document.querySelector(".areas-tab.active");
    var allMobileContainers = document.querySelectorAll(".areas-mobile-content");
    
    if (window.innerWidth <= 768) {
        // Modo mobile - mover conteúdo ativo para container móvel específico
        if (activeTab) {
            var targetArea = activeTab.getAttribute("data-area");
            var targetContent = document.getElementById(targetArea + "-content");
            var mobileContainer = document.getElementById("mobile-" + targetArea);
            
            if (targetContent && targetContent.classList.contains("active") && mobileContainer) {
                var contentClone = targetContent.cloneNode(true);
                
                // Limpar todos os containers móveis primeiro
                for (var i = 0; i < allMobileContainers.length; i++) {
                    allMobileContainers[i].innerHTML = '';
                    allMobileContainers[i].classList.remove("active");
                }
                
                // Adicionar conteúdo ao container específico
                mobileContainer.appendChild(contentClone);
                mobileContainer.classList.add("active");
                mobileContainer.setAttribute("tabindex", "0");
                
                // Reativar event listeners dos botões clonados
                reactivateButtonListeners(mobileContainer);
            }
        }
    } else {
        // Modo desktop - limpar todos os containers móveis
        for (var j = 0; j < allMobileContainers.length; j++) {
            allMobileContainers[j].innerHTML = '';
            allMobileContainers[j].classList.remove("active");
        }
    }
}

// Funcionalidade para as abas da seção "Conheça Nossas Áreas"
function initializeAreasTabs() {
    var areasTabs = document.querySelectorAll(".areas-tab");
    var areasContents = document.querySelectorAll(".areas-content");
    
    for (var i = 0; i < areasTabs.length; i++) {
        areasTabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            var targetArea = this.getAttribute("data-area");
            
            // Remove active class from all tabs
            for (var j = 0; j < areasTabs.length; j++) {
                areasTabs[j].classList.remove("active");
            }
            
            // Add active class to clicked tab
            this.classList.add("active");
            
            // Hide all content areas e limpa estilos inline forçados
            for (var k = 0; k < areasContents.length; k++) {
                areasContents[k].classList.remove("active");
                areasContents[k].style.display = '';
                areasContents[k].style.visibility = '';
            }
            
            // Show target content area
            var targetContent = document.getElementById(targetArea + "-content");
            if (targetContent) {
                targetContent.classList.add("active");
                
                // Mover conteúdo para mobile se necessário
                if (window.innerWidth <= 768) {
                    var mobileContainer = document.getElementById("mobile-" + targetArea);
                    if (mobileContainer) {
                        var contentClone = targetContent.cloneNode(true);
                        mobileContainer.innerHTML = '';
                        mobileContainer.appendChild(contentClone);
                        mobileContainer.classList.add("active");
                        mobileContainer.setAttribute("tabindex", "0");
                        
                        // Reativar event listeners dos botões clonados após um pequeno delay
                        setTimeout(function() {
                            reactivateButtonListeners(mobileContainer);
                        }, 50);
                    }
                }
                
                // Reset ALL AOS animations first
                var allAosElements = document.querySelectorAll('[data-aos]');
                for (var n = 0; n < allAosElements.length; n++) {
                    allAosElements[n].classList.remove('aos-animate');
                }
                
                // Force refresh AOS to detect new elements
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }
        });
    }
}

// Função para garantir que o AOS detecte todos os elementos
function ensureAOSDetection() {
    // Refresh AOS para detectar todos os elementos
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
        
        // Aguardar um pouco e fazer um segundo refresh para garantir
        setTimeout(function() {
            AOS.refresh();
        }, 100);
    }
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
    
    // Configuração AOS (código original)
    setTimeout(function() {
        ensureAOSDetection();
    }, 500);
    
    // ✨ DESABILITADO: initializeAreasTabs() - Usando apenas script inline no HTML
    // initializeAreasTabs();
    
    // AOS configurações originais mantidas
});

// Window Load unificado
window.addEventListener('load', function() {
    
    // AOS (código original)
    setTimeout(function() {
        ensureAOSDetection();
    }, 500);
    
    // Window load configurações originais mantidas
    
    // Inicializar layout responsivo das áreas
    handleResizeForAreas();
    window.addEventListener('resize', handleResizeForAreas);
    
    // Função para inicializar a tab ativa inicial - Simular clique na tab ativa
    function initializeActiveTab() {
        // Se estiver em mobile, simular clique na tab ativa para disparar as animações
        if (window.innerWidth <= 768) {
            var initialActiveTab = document.querySelector(".areas-tab.active");
            if (initialActiveTab) {
                // Simular clique na tab ativa - isso vai acionar toda a lógica que já funciona
                setTimeout(function() {
                                                if (initialActiveTab.click) {
                                initialActiveTab.click();
                            } else {
                                // Fallback para navegadores antigos
                                var clickEvent = new Event('click', { bubbles: true });
                                initialActiveTab.dispatchEvent(clickEvent);
                            }
                            
                            // Aguardar um pouco e garantir que os event listeners estão ativos
                            setTimeout(function() {
                                var activeMobileContainer = document.querySelector('.areas-mobile-content.active');
                                if (activeMobileContainer) {
                                    reactivateButtonListeners(activeMobileContainer);
                                }
                            }, 200);
                }, 100);
            }
        }
    }
    
    // Executar inicialização após DOM estar pronto
    setTimeout(initializeActiveTab, 500);
    
    // Executar novamente após AOS estar completamente carregado
    setTimeout(initializeActiveTab, 2000);
});

// Funcionalidade da Modal de Inscrição
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-inscricao');
    const modalClose = document.getElementById('modal-close');
    
    // Função para abrir a modal
    function openModal() {
        // Calcular largura da barra de rolagem antes de ocultar
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        // Adicionar padding para compensar a barra de rolagem
        document.body.style.paddingRight = scrollbarWidth + 'px';
        document.body.style.overflow = 'hidden';
        
        modal.classList.add('active');
    }
    
    // Função para fechar a modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
    
    // Adicionar event listeners para todos os botões "Inscreva-se"
    const inscricaoButtons = document.querySelectorAll('a[href*="universia.net"]');
    inscricaoButtons.forEach(button => {
        // Verificar se o botão contém "Inscreva-se" ou "inscrever" no texto
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes('inscreva') || buttonText.includes('inscrever')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }
    });
    
    // Fechar modal ao clicar no X
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Fechar modal ao clicar no overlay
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Final do arquivo
