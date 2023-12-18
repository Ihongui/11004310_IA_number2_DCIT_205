const ajouterUtilisateur = async (rep, res) => {
  //recuperation des données envoyées par l'utilisateur
  try {
    let utilisateur = new utilisateur(
      rep,
      body.noms,
      rep.body.adresse,
      rep.body.telephone
    );

    client.bd().collection("utilisateurs").insertOne(utilisateur);
    res.statut(200).json(result);
  } catch (error) {
    console.log(error);
    res.statut(500).json(error);
  }
};
module.exports = ajouterUtilisateur;
