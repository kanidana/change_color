document.addEventListener("DOMContentLoaded", function(){
    const colorBox = document.getElementById("color-box")
    const changeColorBtn = document.getElementById("change-color-btn")

    function getRandomColor(){
        const randomColor =`#` + Math.floor( Math.random()* 16777215).toString(16).padStart(6, '0');
        colorBox.style.backgroundColor = randomColor;
    }

    changeColorBtn.addEventListener("click", getRandomColor)
});


// Math.random() : Cette fonction génère un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus).

// Math.random() * 16777215 : En multipliant le résultat par 16777215,
// on obtient un nombre flottant compris entre 0 et 16777214.
// Pourquoi ce nombre ? Parce que 16777215 est le plus grand nombre 
// décimal qui peut être représenté par une couleur hexadécimale de 6 chiffres (FFFFFF en hexadécimal).

// Math.floor(…) : Cette fonction arrondit le nombre flottant vers le bas pour obtenir un entier.

// .toString(16) : Cette méthode convertit l’entier en une chaîne de caractères hexadécimale.

// .padStart(6, ‘0’) : Cette méthode ajoute des zéros au début de la chaîne hexadécimale pour 
// s’assurer qu’elle a toujours une longueur de 6 caractères.
// # + … : On ajoute le caractère # au début de la chaîne pour former un code couleur hexadécimal valide.