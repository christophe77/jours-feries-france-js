import { format } from 'date-fns';
import { dataset } from '../datas/dataset';

const getFerieName = (date: string) => {
  const formattedDate = format(date, 'yyyy-MM-dd');
  const dateExistsInDataset = dataset.find((data) => data.date === formattedDate);
  if (dateExistsInDataset) return dateExistsInDataset.nom_jour_ferie;
  return false;
};

export default getFerieName;
