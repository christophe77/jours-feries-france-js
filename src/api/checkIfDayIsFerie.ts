import { format } from 'date-fns';
import { dataset } from '../datas/dataset';

const checkIfDayIsFerie = (date: string) => {
  const formattedDate = format(date, 'yyyy-MM-dd');
  const dateExistsInDataset = dataset.find((data) => data.date === formattedDate);
  if (dateExistsInDataset) return true;
  return false;
};

export default checkIfDayIsFerie;
