const express = require("express");
const { connecter, fermerconnexion } = require("./bd/connect");
const routesUtilisateur = require("./root/utilisateur");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routesUtilisateur);

connecter("mongodb://127.0.0.1:27017/", (erreur) => {
  if (erreur) {
    console.error(erreur);
    process.exit(-1);
  } else {
    console.log("Connexion à MongoDB réussie !");
    app.listen(3000, () => {
      console.log("Attente des requêtes au port 3000");
    });
  }
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  fermerconnexion(); // Close the MongoDB connection when the server is stopped
  process.exit(0);
});
