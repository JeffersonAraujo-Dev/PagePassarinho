```javascript
// ========================================
// GRAÚNA DO BILUDOS
// JavaScript principal
// ========================================


// ========================================
// ANO AUTOMÁTICO DO FOOTER
// ========================================

const ano = new Date().getFullYear();

const footerText = document.querySelector(".footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${ano} Graúna do Biludos. Todos os direitos reservados.`;
}


// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const elementos = document.querySelectorAll(
    ".card, .about-image, .about-text, .gallery-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add("hidden");

    observer.observe(elemento);

});


// ========================================
// GALERIA
// Clique na foto para ampliar
// ========================================

const fotos = document.querySelectorAll(".gallery-item img");

fotos.forEach((foto) => {

    foto.addEventListener("click", () => {

        const imagemAberta = document.createElement("div");

        imagemAberta.classList.add("lightbox");

        imagemAberta.innerHTML = `
            <div class="lightbox-content">

                <button class="lightbox-close">
                    ×
                </button>

                <img
                    src="${foto.src}"
                    alt="${foto.alt}"
                >

            </div>
        `;

        document.body.appendChild(imagemAberta);


        // Fechar
        const fechar =
            imagemAberta.querySelector(".lightbox-close");

        fechar.addEventListener("click", () => {

            imagemAberta.remove();

        });


        // Fechar clicando fora da imagem
        imagemAberta.addEventListener("click", (evento) => {

            if (evento.target === imagemAberta) {

                imagemAberta.remove();

            }

        });

    });

});


// ========================================
// WHATSAPP
// ========================================

const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Abrindo contato do WhatsApp..."
        );

    });

});
```
