declare const joursFeriesJs: () => {
    checkIfDayIsFerie: (date: string) => boolean;
    getFerieName: (date: string) => string | false;
    getFerieListByYear: (year: number) => {
        date: string;
        annee: number;
        zone: string;
        nom_jour_ferie: string;
    }[];
};
export default joursFeriesJs;
