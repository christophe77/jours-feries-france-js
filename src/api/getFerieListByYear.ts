import { dataset } from '../datas/dataset';

const getFerieListByYear = (year: number) => {
  const allFerie = dataset.filter((data) => data.annee === year);
  return allFerie;
};

export default getFerieListByYear;
