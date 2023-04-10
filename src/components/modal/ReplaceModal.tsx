import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useCompare } from '../../hooks/useCompare';
import st from '../../styles/ReplaceModal.module.css';
import Input from '../Input';
import ReplaceItem from './ReplaceItem';

interface ReplaceModalProps {
  replaceId: number;
  onClose?: () => void;
}

const ReplaceModal: FC<ReplaceModalProps> = ({ replaceId, onClose }) => {
  const { items, currentIdList, itemsQuantity } = useCompare();
  const { replaceItem } = useActions();
  const [search, setSearch] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { left, width } = ref.current.getBoundingClientRect();

      if (left < 0) {
        ref.current.style.right = Math.floor(left) + 'px';
      }

      if (width > window.innerWidth) {
        ref.current.style.width = Math.floor(width) + 'px';
      }
    }
  }, []);

  let hiddenItems = items.filter(({ id }) => !currentIdList.includes(id));

  if (search.length) {
    hiddenItems = hiddenItems.filter((item) =>
      item.model.toLowerCase().includes(search.toLowerCase())
    );
  }

  const repalceHandler = (itemId: number) => {
    replaceItem({ from: replaceId, to: itemId });
    onClose && onClose();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div ref={ref} className={st.modal}>
      {items.length - itemsQuantity > 6 && (
        <div className='relative'>
          <Input placeholder='Поиск' value={search} onChange={changeHandler} />
        </div>
      )}
      {hiddenItems.map((item) => (
        <ReplaceItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          label={item.model}
          onClick={repalceHandler}
        />
      ))}
    </div>
  );
};

export default ReplaceModal;
