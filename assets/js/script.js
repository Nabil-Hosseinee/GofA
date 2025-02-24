// Code pour téléphone
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('navActive');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('navActive');
    });
});


/* Script filtre mobile et pc */
document.addEventListener("DOMContentLoaded", function () {
    // Gestion du filtre principal (Runes, Personnages, Map)
    document.querySelectorAll(".filtre").forEach(filtre => {
        filtre.addEventListener("click", function () {
            document.querySelector(".filtreActive")?.classList.remove("filtreActive");
            this.classList.add("filtreActive");

            document.querySelector(".filtreNameActive")?.classList.remove("filtreNameActive");
            this.querySelector(".filtreName").classList.add("filtreNameActive");

            let selectedCategory = this.dataset.category;
            
            document.querySelectorAll(".content").forEach(content => {
                content.classList.remove("contentActive");
            });

            document.getElementById(selectedCategory).classList.add("contentActive");
        });
    });

    // Gestion des éléments internes (Personnages, Runes, Zones)
    document.querySelectorAll('.element').forEach(element => {
        element.addEventListener('click', function() {
            // Récupérer la catégorie de l'élément
            let category = this.dataset.category;
        
            // Retirer la classe active de l'élément actuellement actif (si présent)
            const activeElement = document.querySelector(`.elementActive[data-category="${category}"]`);
            if (activeElement) {
                activeElement.classList.remove("elementActive");
            }
        
            // Ajouter la classe active à l'élément cliqué
            this.classList.add("elementActive");
        
            // Retirer la classe active de la description actuellement active
            const activeDescription = document.querySelector(`.descriptionActive[data-category="${category}"]`);
            if (activeDescription) {
                activeDescription.classList.remove("descriptionActive");
            }
        
            // Ajouter la classe active à la description associée à l'élément
            const targetDescription = document.querySelector(`.${this.dataset.target}`);
            // Vérifie si targetDescription est bien trouvé
            if (targetDescription) {
                targetDescription.classList.add("descriptionActive");
            } else {
                console.error("La description cible n'a pas été trouvée !");
            }
        });
    });
});

/* Script pour les runes de la section contact */
// Effet de brillance sur les runes au survol
document.querySelectorAll('.rune-option').forEach(rune => {
    rune.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
        this.style.filter = 'brightness(1.2)';
    });

    rune.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.filter = 'brightness(1)';
    });
});

const runeOptions = document.querySelectorAll('.rune-option');
runeOptions.forEach(option => {
    option.addEventListener('click', function() {
        runeOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        updatePreview();
    });
});

