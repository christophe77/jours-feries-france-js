"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataset_1 = require("../datas/dataset");
const getFerieListByYear = (year) => {
    const allFerie = dataset_1.dataset.filter((data) => data.annee === year);
    return allFerie;
};
exports.default = getFerieListByYear;
