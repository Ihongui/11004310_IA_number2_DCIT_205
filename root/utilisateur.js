const express = require("express");
const ajouterUtilisateur = require("../controller/utilisateur");
const route = express.Router();

Router.route("/utilisatuers").post(ajouterUtilisateur);

module.exports = Router;
