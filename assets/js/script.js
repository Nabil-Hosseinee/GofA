document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");
    const filtres = document.querySelectorAll(".filtre");
    const elements = document.querySelectorAll(".element");
    const runeOptions = document.querySelectorAll(".rune-option");
    const form = document.getElementById("contactForm");
    const previewContainer = document.querySelector(".preview-container");
    const previewElement = document.querySelector(".preview-element");

    const runeColors = {
        feu: "#ff5733", // Rouge feu
        eau: "#3399ff", // Bleu eau
        terre: "#4CAF50", // Vert terre
        air: "#cccccc" // Gris air
    };

    // Gestion du menu burger
    burgerMenu?.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        nav.classList.toggle("navActive");
    });

    navLinks.forEach(link => link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        nav.classList.remove("navActive");
    }));

    // Gestion du filtre principal
    filtres.forEach(filtre => {
        filtre.addEventListener("click", function () {
            document.querySelector(".filtreActive")?.classList.remove("filtreActive");
            document.querySelector(".filtreNameActive")?.classList.remove("filtreNameActive");
            this.classList.add("filtreActive");
            this.querySelector(".filtreName")?.classList.add("filtreNameActive");

            document.querySelectorAll(".content").forEach(content => content.classList.remove("contentActive"));
            document.getElementById(this.dataset.category)?.classList.add("contentActive");
        });
    });

    // Gestion des éléments internes
    elements.forEach(element => {
        element.addEventListener("click", function () {
            let category = this.dataset.category;

            document.querySelector(`.elementActive[data-category="${category}"]`)?.classList.remove("elementActive");
            document.querySelector(`.descriptionActive[data-category="${category}"]`)?.classList.remove("descriptionActive");

            this.classList.add("elementActive");
            document.querySelector(`.${this.dataset.target}`)?.classList.add("descriptionActive");
        });
    });

    // Effet de survol sur les runes
    runeOptions.forEach(rune => {
        rune.addEventListener("mouseover", () => {
            rune.style.transform = "scale(1.1) translateY(-5px)";
            rune.style.filter = "brightness(1.2)";
        });
        rune.addEventListener("mouseout", () => {
            rune.style.transform = "scale(1)";
            rune.style.filter = "brightness(1)";
        });
    });

    // Gestion de la sélection des runes
    runeOptions.forEach(option => {
        option.addEventListener("click", function () {
            runeOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            previewElement.textContent = this.textContent.trim();

            // Changement de la couleur de la boîte de prévisualisation
            const element = this.getAttribute("data-element");
            previewContainer.style.backgroundColor = runeColors[element];
        });
    });

    // Mise à jour de l'aperçu du formulaire
    const updatePreview = (input, previewClass) => {
        document.querySelector(previewClass).textContent = input.value;
    };

    document.getElementById("name")?.addEventListener("input", (e) => updatePreview(e.target, ".preview-name"));
    document.getElementById("email")?.addEventListener("input", (e) => updatePreview(e.target, ".preview-email"));
    document.getElementById("message")?.addEventListener("input", (e) => updatePreview(e.target, ".preview-message"));

    // Gestion de la soumission du formulaire
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        setTimeout(() => successMessage.style.display = "none", 3000);
    });

    const audio = document.getElementById('monAudio');
    const button = document.getElementById('soundButton');
    
    // État initial
    let isMuted = true;
    audio.muted = true;
    button.classList.add('muted');

    // Gestion du clic
    button.addEventListener('click', function() {
        isMuted = !isMuted;
        
        if (isMuted) {
            audio.muted = true;
            audio.pause();
            button.classList.add('muted');
            button.setAttribute('aria-label', 'Activer le son');
        } else {
            audio.muted = false;
            audio.play();
            button.classList.remove('muted');
            button.setAttribute('aria-label', 'Désactiver le son');
        }
    });
});
