# Exercice Fullstack SpringBoot, Angular

## Présentation

Le but de cet exercice est de mettre en place un projet complet avec Angular et SpringBoot.

Nous allons prendre le sujet `Liste des cadeaux de noel secret`.

## Les personnas :
Un `Personna` est un utilisateur des besoins spécifiques.

Dans ce cas il y a les `personnas` suivants :
- Enfants : Utilisateur pouvant créer une liste de souhait.
- Peres Noel : Personne qui offre les cadeaux

## Les cas d'utilisations:
* Un enfant PEUT ajouter un souhait a sa liste de souhait en donnant l'url pour acheter le produit.
* Un enfant PEUT retirer un souhait a sa liste des souhait
* Un enfant NE PEUT PAS voir qui prend a sa charge un souhait.
* Un Pére noel PEUT void les souhaits des enfants.
* Un Pére noel PEUT réserver un cadeau d'un enfant.
* Un Pére noel PEUT voir si un souhait est réserver par un autre pére noel.

## Choix des technologies:
Lors de la création d'un projet nous devons nous posé la question des meilleurs technologies a choisir.
Beaucoup de choses peut rentrer en compte:
- Temps d'apprentissage pour l'équipe.
- Prix de la technologie.
- Performance de la technologie.
- Temps de mise en oeuvre de la technologie.

Pour ce projet, nous allons prendre les technologies suivante:
- __Front__ : Angular car l'équipe connait deja le fonctionnement et ce framework colle bien avec les
besoins fonctionnel.
- __backend__ : Spring Boot Web car l'équipe connait deja le framework et peut facilement le mettre en oeuvre.
Spring est aussi un framework accélerant le développement et proposant de bonnes performances.
- __base de données__ : MongoDB (meilleur sur la plus par des points), Postgres (Bonne base de données SQL. L'une des
seuls avec de bonnes performences et de bonnes fonctionnalitées) ou MySQL (si vous ne connaissez pas les deux autres)

Nous allons prendre une architecture 3-tiers car elle est la plus simple et propose les 
meilleurs performances.

## Mise en place 

### Le git
1. Créer un nouveau repository sur votre github au nom de `santagift`.
2. Dans un dossier correctement choisi (pas le bureau!!!!!) créer un nouveau dossier portant le nom `santagift`.
3. Dans ce dossier initialiser un git.
4. Créer un fichier `README.md` qui explique avec vos mot le principe du projet.
5. Créer un commit avec le message `doc: Ajout du README.md`

### Le Front
1. Initialiser dans le dossier un nouveau projet `Angular` portant le nom `client`
2. Vérifier que le `node_module` est bien ignoré du dossier `client`
5. Faire un commit avec le message `feat: Création du projet frontend`

### Le Backend
1. Dans votre IDE Java préféré, créer un nouveau projet `springboot` avec un initilaliser
2. Choisir le dossier `santagift/backend` comme dossier racine du projet.
3. Choisir les dépendances:
- `spring boot web`
- si MongoDB `spring data mongo` (et penser a installer mongo, ou encore mieux créer un container mongo avec docker!)
- si Postgres `spring data JPA` et `Postgres Driver` (idem)
- si Postgres `spring data JPA` et `MySQL Driver`
4. Faire un commit avec le message `feat: Création du projet backend`

### Premieres pages :
1. Créer un branch `develop`
2. Mettre a jour le fichier `README.md` en expliquant comment lancer l'ensemble du projet.
3. Faire un commit avec le message `doc: mise a jour du README pour expliquer comment lancer le projet`
4. Créer une nouvelle branche `page_list_gift`.
5. Créer une page Angular affichant une liste statique de composant représentant des cadeaux.
- Les `cadeaux` sont représenté par des `card` contenant au minima une image, un titre et un bouton faisant 
référence a un site marchant. C'est un composant `components/CadeauCard`
- La liste en elle-même est un autre composant `components/CadeauList`
- La page s'appelle `pages/Cadeaux`
6. Faire un commit `feat(front): Ajout d'une liste des cadeau dans le front`
7. Ajouter une page permettant la création de `CadeauCard` disponible sur l'url `/` ou `cadeaux`
8. Faire un commit `feat(front): Ajout de la page des cadeaux`
9. Effectuer un merge entre la branche `page_list_gift` et la branche `develop`

### Premieres routes :
Dans le backend
1. créer une nouvelle branche `route_cadeaux`
2. Créer un controller, service et un repository pour la gestion des cadeaux.
3. Le controller possèdes les routes :
- GET cadeaux: retourne l'ensemble des cadeaux
- POST cadeaux: ajoute un cadeau
- DELETE cadeaux/{id}: supprime un cadeau en fonction de son id.
4. Faire un commit `feat(back): ajout des routes pour gestion des cadeaux`
5. Effectuer un merge entre la branche `route_cadeaux` et la branche `develop`

### Liaison Front-back
Dans le front
1. Créer une nouvelle branche `service_cadeaux`
2. créer un service `services/CadeauxHTTPService`
3. Ajouter la dépendance `HttpClient` au service (et au module)
4. Créer les méthodes `tousLesCadeaux` qui utilise `HttpClient` avec la méthode get pour faire appel
au backend sur la route `GET cadeaux`
4. Créer les méthodes `sauvegarderCadeau` qui utilise `HttpClient` avec la méthode get pour faire appel
au backend sur la route `POST cadeaux` et qui passe en body un nouveau cadeau (passé en paramètre de la méthode)
5. Idem avec la méthode `DELETE cadeaux/{id}` ou id est passé en paramètre.
6. Dans la page `cadeaux` ajouter en dépendance le service `CadeauxHttpService`.
7. Utiliser le service pour pouvoir ajouter, supprimer et voir la liste des cadeaux. Ajouter les 
elements necessaire.
8. Faire un commit `feat(front): Ajout de la liaison Front/Back pour les cadeaux`
9. Effectuer un merge entre la branche `service_cadeaux` et la branche `develop`
### Finaliser la premiére version
Dans le back:
1. Documenter les méthodes publique de votre service.
2. Faire un commit `doc(back): documentation du service des cadeaux`

Dans le front:
1. Documenter les méthodes publique de votre service.
2. Faire un commit `doc(back): documentation du service des cadeaux`

Mettre a jour si nécessaire le `README.md` et écrire un commit en fonction `doc: Mise a jour du README pour...`

Dans un invité de commande a la racine du projet, taper la commande:
```shell script
npx standard-version
```
Si vous avez tout bien fait, vous devriez avoir une première version correcte de votre application
avec un front, un back documentés et un fichier `CHANGELOG.md` résumant les modifications effectuer.

### Ajouter des fonctionnalités
En respectant les principes vu précedement, ajouter des fonctionnalités comme:
- Gestions des utilisateurs
- Réserver un cadeau
- Système le log dans le backend.
- La page cadeau ne s'affiche que pour l'utilisateur l'ayant créé. Chaque utilisateur est un enfant.
- Sur la page d'acceuil, l'utilisateur voit les liste des autres utilisateurs.
- Un utilisateur peut definir qu'il va s'occuper d'un cadeau.
- Tout les utilisateurs peuvent coir quel sont les cadeaux deja pris en chage sauf la personne qui 
a créer la liste.
- Une personne peut avoir plusieurs liste.
- Autre a votre gout...
- METTRE EN PLACE DES TESTS!!!!
