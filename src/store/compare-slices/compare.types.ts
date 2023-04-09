import { PhoneType } from '../../types/phone.model';

export interface CompareState {
  items: PhoneType[];
  currentIdList: number[];
  showDifference: boolean;
  itemsQuantity: number;
}
