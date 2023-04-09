import { useTypedSelector } from './useTypedSelector';

export const useCompare = () => {
  const compareOptions = useTypedSelector((state) => state.compare);

  return compareOptions;
};
