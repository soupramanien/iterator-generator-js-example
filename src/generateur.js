function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

function* creerIterateurIntervalleGenerateur(
  debut = 0,
  fin = Infinity,
  pas = 1
) {
  let prochainIndex = debut;
  let nbIterations = 0;
  while (prochainIndex < fin + pas) {
    if (prochainIndex < fin) {
      let resultat = { value: prochainIndex, type: "result" };
      prochainIndex += pas;
      nbIterations++;
      yield resultat;
    } else {
      prochainIndex += pas;
      yield { value: nbIterations, type: "nbIteration" };
    }
  }
}

export { idMaker, creerIterateurIntervalleGenerateur };
