const express = require("express");
const Router = express.Router();

// Define your route handlers
Router.route("/utilisateurs").post(ajouterUtilisateur);

// Export the router
module.exports = Router;
