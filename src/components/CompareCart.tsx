import { FC } from 'react';
import { useCompare } from '../hooks/useCompare';
import { useOutside } from '../hooks/useOutside';
import { PhoneType } from '../types/phone.model';
import ReplaceModal from './modal/ReplaceModal';

type CompareCartProps = Pick<PhoneType, 'imageUrl' | 'model' | 'id'>;

const CompareCart: FC<CompareCartProps> = ({ imageUrl, model, id }) => {
  const { isShow, ref, setIsShow } = useOutside(false);

  const { currentIdList, items } = useCompare();
  const isHiddenElements = items.length > currentIdList.length;

  return (
    <div className='min-w-[160px] md:min-w-[260px]'>
      <div className='relative inline-block min-w-[180px]'>
        <img
          src={imageUrl}
          alt={model}
          className='h-[80px] sm:h-[120px] mx-auto'
        />
        {isHiddenElements && (
          <div
            ref={ref}
            className='absolute w-[30px] h-[27px] left-full top-1/2 -translate-y-full -translate-x-full'
          >
            <button
              onClick={() => setIsShow(!isShow)}
              className='w-full h-full border-none outline-none'
            >
              <img src='/images/chevron_down.svg' alt='chevron' />
            </button>
            {isShow && (
              <ReplaceModal replaceId={id} onClose={() => setIsShow(false)} />
            )}
          </div>
        )}

        <div className='mt-2 whitespace-nowrap text-ellipsis overflow-hidden text-center'>
          {model}
        </div>
      </div>
    </div>
  );
};

export default CompareCart;
