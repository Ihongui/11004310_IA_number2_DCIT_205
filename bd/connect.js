const { MongoClient, Db } = require("mongodb");

var client = null;

function connecter(url, callback) {
  if (client == null) {
    client = new MongoClient(url);

    client.connect((erreur) => {
      if (erreur) {
        client = null;
        callback(erreur);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

function bd() {
  return new Db(client, dbOk);
}

function fermerconnexion() {
  if (client) {
    client.close();
    client = null;
  }
}

module.exports = { connecter, bd, fermerconnexion };

const mongodb = require("./mongodb");

mongodb.connecter("mongodb://localhost:27017", (erreur) => {
  if (erreur) {
    console.error("Erreur de connexion :", erreur);
  } else {
    console.log("Connecté avec succès à MongoDB");
    mongodb.fermerconnexion();
  }
});
