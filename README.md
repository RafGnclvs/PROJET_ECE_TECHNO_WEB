# README
## Setup du projet avant le premier lancement


## JOUEURS
Un joueur peut effectuer deux actions sur cette API :
- Lancer une partie
- Consulter le score des joueurs sur la plateforme

### Lancement d'une partie
En lançant notre site, vous tomberez tout de suite sur la page utilisateur pour lancer une partie (si, plus tard, vous souhaitez revenir sur cette page, il vous suffira de cliquer sur le logo Netflix situé en haut à gauche de la page).

Pour lancer une partie, rien de plus simple : 
- Cliquer sur le bouton "COMMENCER" 
- Sélectionner une catégorie de questions parmi les trois suivantes : Séries, Films ou Animés 
- Sélectionner le nombre de joueurs (de 2 à 4) 
- Rentrer les pseudo des joueurs qui vont participer au quiz
- C'est bon, vous pouvez répondre aux questions !

### Consulter le score des joueurs
Pour consulter le score, cliquer sur l'onglet "USER" situé sur la barre de menu du site. Deux bouttons s'afficheront "Ajouter" et "Faire des modifications". Ces deux boutons vous permettront d'accéder aux scores des joueurs, ainsi qu'à leur classement.

## ADMIN
L'admin peut effectuer deux actions :
- Modifier les users (modifier ou supprimer)
- Modifier les questions (modifier ou supprimer)

### Modifier les users
En arrivant sur la page, deux options s'offrent à vous :
- Ajouter
- Faire des modifications

#### Ajouter (un user)
En arrivant sur cette page, vous aurez la possibilité d'ajouter un utilisateur/joueur dans la base de donnée, en insérant simplement son pseudo dans la zone de texte.

#### Faire des modifications
La liste des users va s'afficher et vous aurez le choix entre :
- Supprimer un joueur 
- Modifier les données d'un joueur (pseudo et score)

**!!Attention!!** La modification implique la modification **obligatoire** du pseudo, sinon la modification ne pourra être validé.

### Modifier les questions
Sélectionner la catégorie dans laquelle se trouve la question à modifier. Trois options s'offrent à vous :
- Ajouter une nouvelle question dans la catégorie que vous venez de sélectionner. Vous devrez remplir un formulaire contenant la bonne réponse, trois réponses et une photo correspondant au personnage que vous souhaitez faire devinez aux joueurs. **!!Attention!!** Tout les champs doivent être rempli (surtour la photo et la bonne réponse) car ils ne pourront être modifié par la suite (sauf si vous supprimer et recréer la question :) ).
- Modifier une question. Le bouton modifier de la question se trouve sous la photo de cette dernière. Vous ne pourrez modifier **que** les mauvaises réponses de la question (sauf si, encore une fois, vous supprimer et recréer la question :) ).
- Supprimer une question. Tout simplement, cliquer sur l'icône "poubelle" situé en dessous de la question que vous souhaitez supprimer. 
