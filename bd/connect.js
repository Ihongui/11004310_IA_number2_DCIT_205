const { MongoClient, Db } = require("mongodb");

var client = null;

function connecter(url, callback) {
  if (client == null) {
    client = new MongoClient(url);

    client.connect((error) => {
      if (error) {
        client = null;
        callback(error);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

function dbOk(error, database) {
  if (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
  } else {
    console.log("Connecté avec succès à la base de données");
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
