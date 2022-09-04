import { creerIterateurIntervalle } from "./iterateur";
import { creerIterateurIntervalleGenerateur, idMaker } from "./generateur";
import { myProgram, executeProgram } from "./generateurComplex";

//IIFE
// (function () {
//   const it = creerIterateurIntervalle(1, 10, 2);
//   let resultat = it.next();
//   while (!resultat.done) {
//     console.log(resultat.value); // 1 3 5 7 9
//     resultat = it.next();
//   }
//   console.log("La séquence parcourue contenait ", resultat.value, " éléments.");
// })();

//IIFE
// (function () {
//   const it = creerIterateurIntervalleGenerateur(1, 10, 2);
//   let resultat = it.next();
//   console.log(resultat);
//   while (!resultat.done) {
//     const effect = resultat.value;
//     switch (effect.type) {
//       case "result":
//         console.log(effect.value);
//         resultat = it.next();
//         break;
//       case "nbIteration":
//         console.log(
//           "La séquence parcourue contenait ",
//           effect.value,
//           " éléments."
//         );
//         resultat = it.next();
//         break;

//       default:
//         resultat = it.next();
//         break;
//     }
//   }
// })();

// var gen = idMaker();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

// const it = myProgram();
// console.log(it.next());
// console.log(it.next("John"));
// console.log(it.next());

executeProgram(myProgram);
