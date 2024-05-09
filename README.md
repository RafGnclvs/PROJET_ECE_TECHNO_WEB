# README
Ce projet à été réalisé par **Leticia MOUSSAOUI**, **Ghita OUANNANE** et **Rafael GONCALVES**.
Nous avons décidé de réaliser un site sur lequel vous pourrez répondre à des quiz sur les thèmes suivants : Films, Séries et Animés.

## Setup du projet avant le premier lancement
### Étape 1 : Cloner le dépôt sur votre machine
- Ouvrez un terminal Git
- Exécuter la commande : git clone https://github.com/RafGnclvs/PROJET_ECE_TECHNO_WEB.git
### Étape 2 : Téléchargement Java 17
- Ouvrez le back sur Intellij
- Onglet menu > File > Project Structure
- Dans Project > SDK > Sélectionner Amazon Corretto version 17.0.10
- Dans Project > Language level > Sélectionner 17 > OK
- Ouvrir un terminal dans Intellij
### Étape 3 : Lancer docker
- Lancer Docker Desktop
- Dans le terminal Intellij, exécuter la commande : docker-compose up
- Run le conteneur : docker run back
### Étape 4 : Init la bdd
- Aller dans l'onglet épinglé, à droite, Database > Data Source > PostgreSQL
- Insérer les informations présent dans le fichier .env (**user:** root ; **password:** toor ; **Database:** db-quiz)
- Tester la connexion > (Si test validé) Apply > OK
- Dans le dossier initdb > Sélectionner les deux fichiers "1_TABLES" et "2_DEFAULT_ENTRIES" > Click droit > Run
- Cliquer sur le **+** > Sélectionner **db-quiz@localhost** > Run
### Étape 5 : Modifier les configurations d'éxécution du back
- Sélectionner BackSkeletonApplicationTest > Click droit > Edit Configurations  
sinon
- A coté des boutons Run et Debug situé en haut, Sélectionner BackSkeletonApplicationTest > Click sur la flèche > Edit Configurations
- Cocher Enable EnvFile > Cliquer sur **+** > Sélectionner le fichier .env > Enabled
- Build and run > Sélectionner corretto-17
- Modify options > Add VM options > Ajouter l'option -Xms256m -Xmx256m
### Étape 6 : Run le back en cliquant sur le bouton pour run ou click droit > Run BackSkeletonApplicationTests
### Étape 7 : Run le front 
- Ouvrez le front sur VS CODE
- Ouvrez un terminal dans VS CODE
- Exécuter la commande : npm start
- Attendez que la compilation du front soit terminé
### Étape 8 : Lancer l'API
- Lancer votre navigateur
- Dans le barre d'URL : http://localhost:4200

**VOUS AVEZ LANCÉ NOTRE PROJET !**

## Description des fonctionnalités de notre site
## JOUEURS
Un joueur peut effectuer deux actions sur cette API :
- Lancer une partie
- Consulter le score des joueurs sur la plateforme

### Lancement d'une partie
En lançant notre site, vous tomberez tout de suite sur la page utilisateur pour lancer une partie (si, plus tard, vous souhaitez revenir sur cette page, il vous suffira de cliquer sur le logo Netflix situé en haut à gauche de la page).

Pour lancer une partie, rien de plus simple : 
- Cliquez sur le bouton "COMMENCER" 
- Sélectionnez une catégorie de questions parmi les trois suivantes : Séries, Films ou Animés 
- Sélectionnez le nombre de joueurs (de 2 à 4) 
- Rentrez les pseudo des joueurs qui vont participer au quiz
- C'est bon, vous pouvez répondre aux questions !
- A la fin de la partie, on affiche le scor et le classement obtenu par les joueurs durant cette partie
- Cliquez sur "REJOUER" ou "ACCUEIL" pour sauvegarder et quitter la partie. 

### Consulter le score totale des joueurs
Pour consulter le score totale obtenue après plusieurs parties, cliquez sur l'onglet "USER" situé sur la barre de menu du site. Deux bouttons s'afficheront "Ajouter" et "Faire des modifications". Ces deux boutons vous permettront d'accéder aux scores des joueurs, ainsi qu'à leur classement.

## ADMIN
L'admin peut effectuer trois actions :
- Modifier les users (modifier ou supprimer)
- Modifier les questions (modifier ou supprimer)
- Afficher l'historique des parties jouées

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

**!!Attention 1!!** La modification implique la modification **obligatoire** du pseudo, sinon la modification ne pourra être validé.

**!!Attention 2!!** La supression d'un joueur impliquera la suppression de toutes les parties auxquelles il aura participé.

### Modifier les questions
Sélectionner la catégorie dans laquelle se trouve la question à modifier. Trois options s'offrent à vous :
- Ajouter une nouvelle question dans la catégorie que vous venez de sélectionner. Vous devrez remplir un formulaire contenant la bonne réponse, trois réponses et une photo correspondant au personnage que vous souhaitez faire devinez aux joueurs. **!!Attention!!** Tout les champs doivent être rempli (surtour la photo et la bonne réponse) car ils ne pourront être modifié par la suite (sauf si vous supprimer et recréer la question :) ).
- Modifier une question. Le bouton modifier de la question se trouve sous la photo de cette dernière. Vous ne pourrez modifier **que** les mauvaises réponses de la question (sauf si, encore une fois, vous supprimer et recréer la question :) ).
- Supprimer une question. Tout simplement, cliquer sur l'icône "poubelle" situé en dessous de la question que vous souhaitez supprimer. 
