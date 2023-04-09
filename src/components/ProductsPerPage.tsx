import { FC, useEffect, useState } from 'react';

interface ProductsPerPageProps {
  variants: number[];
  current?: number;
  onChange?: (value: number) => void;
  label?: string;
  className?: string;
}

const ProductsPerPage: FC<ProductsPerPageProps> = ({
  current = 3,
  variants,
  className,
  onChange,
  label = '',
}) => {
  const [currentValue, setCurrentValue] = useState(current);

  useEffect(() => {
    setCurrentValue(current);
  }, [current]);

  const changeHandler = (value: number) => {
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div
      className={`
    text-navyBlue leading-5 flex
    ${className}
    `}
    >
      {!!label && <span className='mr-2'>{label}:</span>}
      <div>
        {variants.map((vr) => (
          <span
            key={vr}
            onClick={() => changeHandler(vr)}
            className={`
            px-0.5
            hover:opacity-70
            ${
              currentValue === vr
                ? 'cursor-default pointer-events-none'
                : 'cursor-pointer'
            }
            ${currentValue === vr ? 'underline' : ''}
            `}
          >
            {vr}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductsPerPage;
