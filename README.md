TP JavaScript � Calculatrice simple
R�aliser un programme de calculatrice simple en JS.
La calculatrice doit pouvoir effectuer des op�rations (addition, soustraction, multiplication,
division) sur
deux op�randes � la fois puis afficher le r�sultat.
La calculatrice devra comporter � minima les �l�ments HTML suivants:
- 2 champs input (text) pour r�cup�rer la saisie de l'utilisateur
- une balise select contenant des options pour chaque op�rateur (+, -, *, /)
- un p ou une div pour afficher le r�sultat
- un button ou un input (submit) pour d�clencher le calcul de l'op�ration
- une balise script contenant le code JS
L'utilisateur doit donc pouvoir
1. Choisir un op�rateur gr�ce aux options
2. Saisir 2 op�randes gr�ce aux inputs
3. Visualiser le r�sultat ou l'erreur �ventuelle au click sur l'�l�ment d�clencheur
Quelques contraintes � impl�menter:
- Utiliser des classes CSS pour mettre la sommairement la calculatrice en forme
- Le programme devra signaler les saisies incorrectes (NaN, division par 0)
- Le programme devra pouvoir convertir les Strings en Number quand cela est possible
M�thodes et propri�t�s utiles:
- console.log()
- document.getElementById()
- Number(value)
- parseFloat(value, 10)
- isNaN(value)
- element.innerHTML
- onclick, onchange
Pour aller plus loin:
- styliser la calculette pour qu'elle ressemble � une vraie
- remplacer les input (text) par des div pour simuler les touches
- ajouter des listners � ces touches pour �couter les clicks de l'utilisateur
o indice : onclick ou addEventListener()
o indice: boucle for
- ajouter une m�thode facultative pour prendre le dernier r�sultat comme base de calcul
- ajouter une touche C pour r�initialiser le programme