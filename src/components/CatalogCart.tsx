import { FC, useMemo } from 'react';
import { useActions } from '../hooks/useActions';
import { useCompare } from '../hooks/useCompare';
import { PhoneType } from '../types/phone.model';
import Checkbox from './Checkbox';

interface CatalogCartProps {
  phone: PhoneType;
}

const CatalogCart: FC<CatalogCartProps> = ({ phone }) => {
  const { id, imageUrl, model } = phone;
  const { items } = useCompare();
  const { addItem, removeItem } = useActions();

  const isSelected = useMemo(
    () => !!items.find((item) => item.id === id),
    [items, id]
  );

  const checkHandler = (selected: boolean) => {
    if (selected) {
      addItem(phone);
    } else removeItem(id);
  };

  return (
    <div className='w-[280px] sm:max-w-full flex flex-col p-4 border-2 border-metallic/50 hover:shadow-md transition rounded'>
      <img
        src={imageUrl}
        alt={model}
        className='max-h-[120px] object-contain'
      />
      <h2
        className='mt-2 grow whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center'
        title={model}
      >
        {model}
      </h2>
      <div className='mt-2 mx-auto -translate-x-2'>
        <Checkbox
          label='Сравнить'
          checked={isSelected}
          onChange={checkHandler}
        />
      </div>
    </div>
  );
};

export default CatalogCart;
