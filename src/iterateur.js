export function creerIterateurIntervalle(debut = 0, fin = Infinity, pas = 1) {
  let prochainIndex = debut;
  let nbIterations = 0;
  const rangeIterator = {
    next: function () {
      let resultat;
      if (prochainIndex < fin) {
        resultat = { value: prochainIndex, done: false };
        prochainIndex += pas;
        nbIterations++;
        return resultat;
      }
      return { value: nbIterations, done: true };
    }
  };
  return rangeIterator;
}
