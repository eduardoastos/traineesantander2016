// Funcionalidade dos botões de benefícios
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

        function switchToSantander() {
            console.log("Botão Santander clicado");
            corpSantander.classList.add("active");
            corp2.classList.remove("active");
            corp3.classList.remove("active");
            
            descSantander.classList.remove("d-none");
            desc2.classList.add("d-none");
            desc3.classList.add("d-none");
            
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }

        function switchToF1rst() {
            console.log("Botão F1RST clicado");
            corpSantander.classList.remove("active");
            corp2.classList.add("active");
            corp3.classList.remove("active");
            
            descSantander.classList.add("d-none");
            desc2.classList.remove("d-none");
            desc3.classList.add("d-none");
            
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }

        function switchToTools() {
            console.log("Botão TOOLS clicado");
            corpSantander.classList.remove("active");
            corp2.classList.remove("active");
            corp3.classList.add("active");
            
            descSantander.classList.add("d-none");
            desc2.classList.add("d-none");
            desc3.classList.remove("d-none");
            
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
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
        
        // Teste inicial para verificar se funciona
        console.log("Testando funcionalidade...");
        setTimeout(function() {
            console.log("Classe active inicial:", corpSantander.classList.contains("active"));
        }, 500);
        
    }, 2000); // Aguardar 2 segundos
}); 