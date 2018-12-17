## Objectif

Développer une interface capable de lister des messages. Elle permettra également de remplir un message pour le poster.
Un message est composé d'un texte et d'un champ précisant s'il est privé ou public.

L'approche doit être API centrique, mais pas nécessaire de déveloper les API pour le tests (données statiques dans `./src/fakeMessages.js`).

## Conception

Le composant **App** contient un composant **Header**, **MessageList** et **MessageForm**.
**MessageList** rend tous les messages renvoyés par l'API.
**MessageForm** est le formulaire pour rajouter un message et le mettre en privé si besoin

## Technologies

Ce projet est mis en place avec [Create React App](https://github.com/facebook/create-react-app).
Il utilise **JavaScript** avec **React.js**.
L'interface est mise en forme en utilisant le framework [Material UI](https://material-ui.com/).
Le linter sera **ESLint**.
Les tests utiliseront **Jest** et **Enzyme**.

## Mise en place de l'environnement

### Installer les dépendances

```
npm install
```

### Lancer l'application en local

```
npm start | yarn start
```

### Lancer les tests

```
npm test | yarn test
```
