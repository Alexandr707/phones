import { FC, MouseEvent, useState } from 'react';
import { useCompare } from '../hooks/useCompare';
import { useOutside } from '../hooks/useOutside';
import { PhoneType } from '../types/phone.model';
import Modal from './modal/Modal';
import ReplaceModal from './modal/ReplaceModal';
import { ModalProps } from './modal/modal.interface';

type CompareCartProps = Pick<PhoneType, 'imageUrl' | 'model' | 'id'>;

const CompareCart: FC<CompareCartProps> = ({ imageUrl, model, id }) => {
  const { isShow, ref, setIsShow } = useOutside(false);

  const { currentIdList, items } = useCompare();

  const [modalPosition, setModalPosition] = useState<ModalProps>({});

  const isHiddenElements = items.length > currentIdList.length;

  const btnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { top, right } = e.currentTarget.getBoundingClientRect();

    setModalPosition({ top, right: document.body.offsetWidth - right });
    setIsShow(!isShow);
  };

  return (
    <div className='min-w-[160px] md:min-w-[260px]'>
      <div className='relative inline-block min-w-[180px]'>
        <img
          src={imageUrl}
          alt={model}
          className='h-[80px] sm:h-[120px] mx-auto'
        />
        {isHiddenElements && (
          <div className='absolute w-[30px] h-[27px] left-full top-1/2 -translate-y-full -translate-x-full'>
            <button
              onClick={btnClickHandler}
              className='w-full h-full border-none outline-none'
            >
              <img src='/images/chevron_down.svg' alt='chevron' />
            </button>
            {isShow && (
              <Modal ref={ref} {...modalPosition}>
                <ReplaceModal replaceId={id} onClose={() => setIsShow(false)} />
              </Modal>
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
