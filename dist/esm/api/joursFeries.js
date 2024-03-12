"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const dataset_1 = require("../datas/dataset");
const joursFeriesJs = () => {
    const checkIfDayIsFerie = (date) => {
        const formattedDate = (0, date_fns_1.format)(date, 'yyyy-MM-dd');
        const dateExistsInDataset = dataset_1.dataset.find((data) => data.date === formattedDate);
        if (dateExistsInDataset)
            return true;
        return false;
    };
    const getFerieName = (date) => {
        const formattedDate = (0, date_fns_1.format)(date, 'yyyy-MM-dd');
        const dateExistsInDataset = dataset_1.dataset.find((data) => data.date === formattedDate);
        if (dateExistsInDataset)
            return dateExistsInDataset.nom_jour_ferie;
        return false;
    };
    const getFerieListByYear = (year) => {
        const allFerie = dataset_1.dataset.filter((data) => data.annee === year);
        return allFerie;
    };
    return { checkIfDayIsFerie, getFerieName, getFerieListByYear };
};
exports.default = joursFeriesJs;
