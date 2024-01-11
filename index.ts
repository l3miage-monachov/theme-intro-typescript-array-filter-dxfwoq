// Import stylesheets
import './style.css';
import './utils';
import { LogTests } from './utils';

/***********************************************************************************************************************
 * Fonction qui filtre un tableau de nombre
 * pour ne conserver que les nombres multiples de 3
 * Utilisez la méthode filter sur L.
 */
function multipleDe3(...L: number[]): number[] {
  return L.filter((x) => x % 3 === 0);
}
LogTests<Parameters<typeof multipleDe3>, ReturnType<typeof multipleDe3>>(
  'Fonction qui filtre les multiples de 3',
  multipleDe3,
  'multipleDe3',
  [
    { args: [6, 7, 2, 9, 33, 76, 78], expectedResult: [6, 9, 33, 78] },
    { args: [], expectedResult: [] },
    { args: [5, 4, 3, 2, 1, 0], expectedResult: [3, 0] },
  ]
);

/***********************************************************************************************************************
 * Fonction qui filtre les string de taille >= à 5
 */
function taille5(...L: string[]): string[] {
  // à compléter
  return L.filter((value) => value.length >= 5);
}
LogTests<Parameters<typeof taille5>, ReturnType<typeof taille5>>(
  'string de taille >= à 5',
  taille5,
  'taille5',
  [
    {
      args: ['a', 'coucou ça va', 'bob', 'oui oui'],
      expectedResult: ['coucou ça va', 'oui oui'],
    },
    { args: [], expectedResult: [] },
  ]
);

/***********************************************************************************************************************
 * Fonction qui filtre les string de taille <= à 7
 * et qui renvoie un objet de type {s: string, t: number}
 * où s est la string en MAJUSCULE et t sa taille
 * Pour passer en majuscule, voir la méthode toUpperCase
 */
function exo3(...L: string[]): { s: string; t: number }[] {
  return L.filter((x) => x.length <= 7).map((s) => {
    return {
      s: s.toUpperCase(),
      t: s.length,
    };
  });
}
LogTests<Parameters<typeof exo3>, ReturnType<typeof exo3>>(
  'Filtre et map',
  exo3,
  'exo3',
  [
    {
      args: ['a', 'coucou ça va', 'bob', 'oui oui'],
      expectedResult: [
        { s: 'A', t: 1 },
        { s: 'BOB', t: 3 },
        { s: 'OUI OUI', t: 7 },
      ],
    },
    { args: [], expectedResult: [] },
  ]
);
