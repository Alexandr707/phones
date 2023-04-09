import { FC, useEffect, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';

interface CheckboxProps {
  label: string;
  className?: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  className,
  onChange,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, []);

  const handlerClick = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <div>
      <span
        onClick={handlerClick}
        className={`
        relative text-navyBlue leading-5 pl-9 cursor-pointer select-none
        ${className}
        `}
      >
        {label}
        <div className='absolute left-1 top-1/2 rounded-sm border-quickSilver border-2 flex justify-center items-center w-[20px] h-[20px] -translate-y-1/2'>
          {isChecked && <BsCheck2 size={20} />}
        </div>
      </span>
    </div>
  );
};

export default Checkbox;
