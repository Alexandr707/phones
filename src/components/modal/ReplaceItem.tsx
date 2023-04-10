import { FC } from 'react';
import st from '../../styles/ReplaceItem.module.css';

interface ReplaceItemProps {
  id: number;
  label: string;
  imageUrl: string;
  onClick?: (itemId: number) => void;
}

const ReplaceItem: FC<ReplaceItemProps> = ({
  id,
  imageUrl,
  label,
  onClick,
}) => {
  const clickHandler = () => {
    if (onClick) onClick(id);
  };

  return (
    <div className='flex relative mb-4 pl-8 '>
      <img
        src={imageUrl}
        alt={label}
        className='w-[50px] h-[50px]  mr-6 object-contain'
      />
      <h3
        className={`max-w-full align-middle leading-10 whitespace-nowrap text-ellipsis overflow-hidden text-black ${st.label}`}
        title={label}
      >
        {label}
      </h3>
      <button
        onClick={clickHandler}
        className='w-[20px] h-[20px] absolute left-0 top-1/2 -translate-y-1/2 border-none outline-none cursor-pointer'
      >
        <img
          src='/images/replace.svg'
          alt='replace'
          className='w-full h-full object-contain'
        />
      </button>
    </div>
  );
};

export default ReplaceItem;
