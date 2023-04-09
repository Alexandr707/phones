import { FC, useEffect, useRef } from 'react';
import fieldDescription from '../../data/phoneFieldsDescription';
import { useActions } from '../../hooks/useActions';
import { useCompare } from '../../hooks/useCompare';
import { useResize } from '../../hooks/useResize';
import { PhoneType } from '../../types/phone.model';
import { PhoneDescription } from '../../types/phoneDescription.model';
import { isSamePropValue } from '../../utils/isSamePropValue';
import Checkbox from '../Checkbox';
import CompareCart from '../CompareCart';
import Container from '../Container';
import Td from './Td';

interface TableProps {
  rows: Array<keyof PhoneDescription>;
  phones: PhoneType[];
}

const Table: FC<TableProps> = ({ rows, phones }) => {
  const { showDifference, items } = useCompare();
  const { toggleShowDifference } = useActions();

  const wraperRef = useRef<HTMLDivElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const screen = useResize();

  useEffect(() => {
    if (wraperRef.current && tbodyRef.current && bgRef.current) {
      const scrollSize =
        wraperRef.current.offsetHeight - wraperRef.current.clientHeight;

      bgRef.current.style.height =
        tbodyRef.current.getBoundingClientRect().height + 2 + scrollSize + 'px';
    }
  });

  let currentRows = rows;

  if (showDifference) {
    currentRows = rows.filter((row) => !isSamePropValue(row, phones));
  }

  if (!items.length) return null;

  return (
    <div className='relative'>
      <Container>
        <div ref={wraperRef} className='mt-4 overflow-x-auto'>
          <table className='border-collapse w-full leading-none '>
            <thead>
              <tr>
                <td className='align-bottom pb-8'>
                  <Checkbox
                    label='Показать различия'
                    className='whitespace-nowrap'
                    checked={showDifference}
                    onChange={(_: boolean) => toggleShowDifference()}
                  />
                </td>
                {phones.map((ph) => (
                  <td key={ph.id} className='pb-8 px-4'>
                    <CompareCart
                      id={ph.id}
                      imageUrl={ph.imageUrl}
                      model={ph.model}
                    />
                  </td>
                ))}
              </tr>
            </thead>
            <tbody ref={tbodyRef}>
              {currentRows.map((row) => (
                <tr key={row} className='border-y-[1px] border-[#cdcfd2]'>
                  <th className='py-4 md:py-10 w-56 text-left border-y-[1px] border-[#cdcfd2] text-metallic uppercase font-medium'>
                    {fieldDescription[row]}
                  </th>
                  {phones.map((phone) => (
                    <Td
                      key={phone.id}
                      value={phone[row]}
                      price={row === 'price'}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <div
        ref={bgRef}
        className='absolute left-0 bottom-0 w-full -z-10 bg-[#F4F9FC]'
      ></div>
    </div>
  );
};

export default Table;
