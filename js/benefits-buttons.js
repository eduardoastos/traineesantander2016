// Funcionalidade dos botões de benefícios com AOS

// Aguardar o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Aguardar mais um pouco para garantir que tudo está pronto
    setTimeout(function() {
        
        var corpSantander = document.getElementById("js-corp-santander");
        var corp2 = document.getElementById("js-corp-2");
        var corp3 = document.getElementById("js-corp-3");
        var descSantander = document.getElementById("js-benefits-santander");
        var desc2 = document.getElementById("js-empresa-2");
        var desc3 = document.getElementById("js-empresa-3");

        // Verificar se todos os elementos existem
        if (!corpSantander || !corp2 || !corp3 || !descSantander || !desc2 || !desc3) {
            return;
        }

        // Variável para controlar qual seção está ativa
        var currentActiveSection = 'santander';

        // Função para resetar classes AOS e reativar animações
        function resetAOSAnimations(container) {
            var cards = container.querySelectorAll('li[data-aos]');
            cards.forEach(function(card) {
                // Remove classes AOS para resetar
                card.classList.remove('aos-animate');
                card.style.transform = '';
                card.style.opacity = '';
            });
            
            // Força o AOS a detectar novamente os elementos
            setTimeout(function() {
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }, 50);
        }

        // Função para trocar seção
        function switchSection(targetSection, targetContainer, button1, button2, button3) {
            if (currentActiveSection === targetSection) {
                return;
            }
            currentActiveSection = targetSection;

            // Atualizar classes dos botões
            button1.classList.remove('active');
            button2.classList.remove('active');
            button3.classList.remove('active');
            
            if (targetSection === 'santander') {
                button1.classList.add('active');
            } else if (targetSection === 'f1rst') {
                button2.classList.add('active');
            } else if (targetSection === 'tools') {
                button3.classList.add('active');
            }

            // Ocultar todas as seções
            descSantander.classList.add('d-none');
            desc2.classList.add('d-none');
            desc3.classList.add('d-none');

            // Mostrar seção alvo
            targetContainer.classList.remove('d-none');

            // Resetar e reativar animações AOS
            resetAOSAnimations(targetContainer);

            // Para F1RST, mostrar apenas os primeiros 6 cards
            if (targetSection === 'f1rst') {
                var f1rstCards = desc2.querySelectorAll('li');
                f1rstCards.forEach(function(card, index) {
                    if (index >= 6) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'block';
                    }
                });
            }
        }

        // Event listeners para os botões
        corpSantander.addEventListener("click", function() {
            switchSection('santander', descSantander, corpSantander, corp2, corp3);
        });

        corp2.addEventListener("click", function() {
            switchSection('f1rst', desc2, corpSantander, corp2, corp3);
        });

        corp3.addEventListener("click", function() {
            switchSection('tools', desc3, corpSantander, corp2, corp3);
        });

        // Inicializar com Santander ativo
        corpSantander.classList.add('active');
        
        // Garantir que apenas Santander está visível
        descSantander.classList.remove('d-none');
        desc2.classList.add('d-none');
        desc3.classList.add('d-none');
    }, 100);
}); 