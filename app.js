const express = require("express");
const { connecter } = require("./bd/connect");
const routesUtilisateur = require("./root/utilisateur");
const app = express();

app.use(express.urlencoded({ extends: true }));
app.use(expres.json());

app.use("/api/v1", routesUtilisateur);
connecter("mongodb://127.0.0.1:27017/", (erreur) => {
  if (erreur) {
    console.error(erreur);
    process.exit(-1);
  } else {
    console.log("Connexion à MongoDB réussie !");
    app.listen(3000);
    console.log("attente des requette au port 3000");
  }
});

app.listen(3000);
console.log("attente de requetts au port 3000", (erreur) => {
  if (erreur) {
    console.error("Erreur : ", erreur);
    process.exit(-1);
  } else {
    console.log("Serveur en écoute sur le port 3000");
  }
});
