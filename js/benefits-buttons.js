// Funcionalidade dos botões de benefícios com animações
console.log("Carregando script dos botões de benefícios...");

// Aguardar o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado, iniciando funcionalidade dos botões");
    
    // Aguardar mais um pouco para garantir que tudo está pronto
    setTimeout(function() {
        console.log("Iniciando funcionalidade dos botões de benefícios");
        
        var corpSantander = document.getElementById("js-corp-santander");
        var corp2 = document.getElementById("js-corp-2");
        var corp3 = document.getElementById("js-corp-3");
        var descSantander = document.getElementById("js-benefits-santander");
        var desc2 = document.getElementById("js-empresa-2");
        var desc3 = document.getElementById("js-empresa-3");

        console.log("Elementos encontrados:");
        console.log("corpSantander:", corpSantander);
        console.log("corp2:", corp2);
        console.log("corp3:", corp3);
        console.log("descSantander:", descSantander);
        console.log("desc2:", desc2);
        console.log("desc3:", desc3);

        // Verificar se todos os elementos existem
        if (!corpSantander || !corp2 || !corp3 || !descSantander || !desc2 || !desc3) {
            console.error("Alguns elementos dos botões de benefícios não foram encontrados");
            console.error("Elementos faltando:", {
                corpSantander: !corpSantander,
                corp2: !corp2,
                corp3: !corp3,
                descSantander: !descSantander,
                desc2: !desc2,
                desc3: !desc3
            });
            return;
        }

        // Variável para controlar qual seção está ativa
        var currentActiveSection = 'santander';
        var isAnimating = false;

        // Função para animar a saída dos cards
        function animateCardsOut(container, callback) {
            var cards = container.querySelectorAll('li');
            var totalCards = cards.length;
            var completedAnimations = 0;
            
            console.log("Animando saída de", totalCards, "cards");
            
            if (totalCards === 0) {
                callback();
                return;
            }

            // Animar cada card saindo individualmente
            cards.forEach(function(card, index) {
                setTimeout(function() {
                    // Remover qualquer animação AOS e forçar reset
                    card.classList.remove('aos-animate');
                    card.style.animationDelay = '';
                    card.style.animationDuration = '';
                    
                    card.style.transition = 'all 0.3s ease-out';
                    card.style.transform = 'translateY(-20px)';
                    card.style.opacity = '0';
                    
                    setTimeout(function() {
                        completedAnimations++;
                        if (completedAnimations === totalCards) {
                            console.log("Saída completa, iniciando entrada");
                            callback();
                        }
                    }, 300);
                }, index * 40); // Delay um pouco mais rápido para saída
            });
        }

        // Função para animar a entrada dos cards
        function animateCardsIn(container, maxCards) {
            var cards = container.querySelectorAll('li');
            
            // Se maxCards for especificado, limitar a quantidade de cards
            if (maxCards && maxCards > 0) {
                // Esconder todos os cards primeiro
                cards.forEach(function(card, index) {
                    if (index >= maxCards) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'block';
                    }
                });
                
                // Redefinir cards para apenas os visíveis
                cards = Array.from(cards).slice(0, maxCards);
            } else {
                // Mostrar todos os cards
                cards.forEach(function(card) {
                    card.style.display = 'block';
                });
            }
            
            console.log("Animando entrada de", cards.length, "cards");
            
            // Resetar completamente os cards para estado inicial
            cards.forEach(function(card, index) {
                // Forçar reset completo
                card.style.transform = 'translateY(50px)';
                card.style.opacity = '0';
                card.style.transition = 'all 0.4s ease-out';
                card.classList.remove('aos-animate');
                
                // Remover qualquer animação AOS
                card.style.animationDelay = '';
                card.style.animationDuration = '';
            });

            // Pequena pausa para garantir que o reset foi aplicado
            setTimeout(function() {
                // Animar cards sequencialmente
                cards.forEach(function(card, index) {
                    if (card.style.display !== 'none') {
                        var delay = index * 80; // Delay fixo e consistente
                        
                        setTimeout(function() {
                            console.log("Animando card", index);
                            card.style.transform = 'translateY(0)';
                            card.style.opacity = '1';
                        }, delay);
                    }
                });
            }, 50);
        }

        // Função para alternar entre seções com animação
        function switchSection(targetSection, targetContainer, button1, button2, button3) {
            if (isAnimating || currentActiveSection === targetSection) {
                return;
            }

            isAnimating = true;
            console.log("Alternando para:", targetSection);

            // Atualizar classes dos botões
            button1.classList.remove("active");
            button2.classList.remove("active");
            button3.classList.remove("active");
            
            if (targetSection === 'santander') {
                corpSantander.classList.add("active");
            } else if (targetSection === 'f1rst') {
                corp2.classList.add("active");
            } else if (targetSection === 'tools') {
                corp3.classList.add("active");
            }

            // Encontrar o container atualmente ativo
            var currentContainer;
            if (currentActiveSection === 'santander') {
                currentContainer = descSantander;
            } else if (currentActiveSection === 'f1rst') {
                currentContainer = desc2;
            } else if (currentActiveSection === 'tools') {
                currentContainer = desc3;
            }

            // Animar saída dos cards atuais
            animateCardsOut(currentContainer, function() {
                // Esconder container atual
                currentContainer.classList.add("d-none");
                
                // Mostrar novo container
                targetContainer.classList.remove("d-none");
                
                // Animar entrada dos novos cards
                setTimeout(function() {
                    // Para F1RST, mostrar apenas os primeiros 6 cards
                    var maxCards = (targetSection === 'f1rst') ? 6 : null;
                    animateCardsIn(targetContainer, maxCards);
                    currentActiveSection = targetSection;
                    isAnimating = false;
                    
                    console.log("Transição para " + targetSection + " concluída");
                }, 100);
            });
        }

        function switchToSantander() {
            console.log("Botão Santander clicado");
            switchSection('santander', descSantander, corpSantander, corp2, corp3);
        }

        function switchToF1rst() {
            console.log("Botão F1RST clicado");
            switchSection('f1rst', desc2, corp2, corpSantander, corp3);
        }

        function switchToTools() {
            console.log("Botão TOOLS clicado");
            switchSection('tools', desc3, corp3, corpSantander, corp2);
        }

        // Remover qualquer listener existente e adicionar novos
        corpSantander.onclick = switchToSantander;
        corp2.onclick = switchToF1rst;
        corp3.onclick = switchToTools;

        // Também adicionar event listeners como backup
        corpSantander.addEventListener("click", switchToSantander);
        corp2.addEventListener("click", switchToF1rst);
        corp3.addEventListener("click", switchToTools);

        console.log("Event listeners adicionados com sucesso");
        
        // Inicializar animação nos cards iniciais
        setTimeout(function() {
            // Garantir que o AOS seja inicializado nos cards do Santander
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
            console.log("AOS inicializado para os cards do Santander");
        }, 500);
        
    }, 2000); // Aguardar 2 segundos
}); 