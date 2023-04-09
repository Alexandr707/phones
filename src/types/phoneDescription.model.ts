import { PhoneType } from './phone.model';

type PhoneFields = Omit<PhoneType, 'imageUrl' | 'model' | 'id'>;

export type PhoneDescription = {
  [key in keyof PhoneFields]: string;
};
