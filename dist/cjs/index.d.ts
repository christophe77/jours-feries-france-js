declare const joursFeriesFranceJs: {
    checkIfDayIsFerie: (date: string) => boolean;
    getFerieListByYear: (year: number) => {
        date: string;
        annee: number;
        zone: string;
        nom_jour_ferie: string;
    }[];
    getFerieName: (date: string) => string | false;
};
export default joursFeriesFranceJs;
