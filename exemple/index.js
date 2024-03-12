// eslint-disable-next-line @typescript-eslint/no-var-requires
const joursFeriesFranceJs = require('../dist/cjs').default;
const { checkIfDayIsFerie, getFerieName, getFerieListByYear } = joursFeriesFranceJs;

console.log(checkIfDayIsFerie('2023-05-01'));
console.log(checkIfDayIsFerie('2023-12-25'));

console.log(getFerieName('2023-12-25'));

console.log(getFerieListByYear(2024));
