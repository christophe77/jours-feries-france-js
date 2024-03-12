"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfDayIsFerie_1 = __importDefault(require("./api/checkIfDayIsFerie"));
const getFerieListByYear_1 = __importDefault(require("./api/getFerieListByYear"));
const getFerieName_1 = __importDefault(require("./api/getFerieName"));
const joursFeriesFranceJs = {
    checkIfDayIsFerie: checkIfDayIsFerie_1.default,
    getFerieListByYear: getFerieListByYear_1.default,
    getFerieName: getFerieName_1.default,
};
exports.default = joursFeriesFranceJs;
