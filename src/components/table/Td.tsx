import { FC } from 'react';

interface TdProps {
  value: string | boolean | number;
  price?: boolean;
}

const Td: FC<TdProps> = ({ value, price }) => {
  const Support = <img src='/images/support.svg' alt='suport' />;
  const NoSupport = <img src='/images/no-support.svg' alt='no suport' />;

  if (price) {
    return (
      <td className='py-4 md:py-10 px-6 font-medium'>
        {new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'RUB',
        }).format(Number(value))}
      </td>
    );
  }

  return (
    <td className='py-4 md:py-10 px-6 font-medium'>
      {typeof value === 'boolean' ? (value ? Support : NoSupport) : value}
    </td>
  );
};

export default Td;
