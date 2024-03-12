# jours-feries-france-js

Liste des jours fériés basée sur l'API https://api.gouv.fr/les-api/jours-feries.

## Installation

    yarn add jours-feries-france-js
    //
    npm install jours-feries-france-js

## Utilisation

    const joursFeriesFranceJs = require('../dist/cjs').default;
    // ou
    import joursFeriesFranceJs from 'joursFeriesFranceJs';

    const { checkIfDayIsFerie, getFerieName, getFerieListByYear } = joursFeriesFranceJs;

    // vérifier si un jour est férié
    console.log(checkIfDayIsFerie('2023-05-01'));
    console.log(checkIfDayIsFerie('2023-12-25'));

    // Obtenir le nom d'un jour férié
    console.log(getFerieName('2023-12-25'));

    // Obtenir la liste des jours fériés d'une année
    console.log(getFerieListByYear(2024));

