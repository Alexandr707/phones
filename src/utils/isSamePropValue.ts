import { PhoneType } from '../types/phone.model';

export function isSamePropValue(
  row: keyof PhoneType,
  phones: PhoneType[]
): boolean {
  let result = true;

  for (let i = 0; i < phones.length; i++) {
    if (phones[0][row] !== phones[i][row]) {
      result = false;
      break;
    }
  }

  return result;
}
