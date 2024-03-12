declare const getFerieListByYear: (year: number) => {
    date: string;
    annee: number;
    zone: string;
    nom_jour_ferie: string;
}[];
export default getFerieListByYear;
