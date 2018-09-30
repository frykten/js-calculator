TP JavaScript – Calculatrice simple
Réaliser un programme de calculatrice simple en JS.
La calculatrice doit pouvoir effectuer des opérations (addition, soustraction, multiplication,
division) sur
deux opérandes à la fois puis afficher le résultat.
La calculatrice devra comporter à minima les éléments HTML suivants:
- 2 champs input (text) pour récupérer la saisie de l'utilisateur
- une balise select contenant des options pour chaque opérateur (+, -, *, /)
- un p ou une div pour afficher le résultat
- un button ou un input (submit) pour déclencher le calcul de l'opération
- une balise script contenant le code JS
L'utilisateur doit donc pouvoir
1. Choisir un opérateur grâce aux options
2. Saisir 2 opérandes grâce aux inputs
3. Visualiser le résultat ou l'erreur éventuelle au click sur l'élément déclencheur
Quelques contraintes à implémenter:
- Utiliser des classes CSS pour mettre la sommairement la calculatrice en forme
- Le programme devra signaler les saisies incorrectes (NaN, division par 0)
- Le programme devra pouvoir convertir les Strings en Number quand cela est possible
Méthodes et propriétés utiles:
- console.log()
- document.getElementById()
- Number(value)
- parseFloat(value, 10)
- isNaN(value)
- element.innerHTML
- onclick, onchange
Pour aller plus loin:
- styliser la calculette pour qu'elle ressemble à une vraie
- remplacer les input (text) par des div pour simuler les touches
- ajouter des listners à ces touches pour écouter les clicks de l'utilisateur
o indice : onclick ou addEventListener()
o indice: boucle for
- ajouter une méthode facultative pour prendre le dernier résultat comme base de calcul
- ajouter une touche C pour réinitialiser le programme