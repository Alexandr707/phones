import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`
  text-2xl leading-none border-[1px] border-lightGray placeholder:text-lightGray py-2 px-4 rounded-[4px] mb-4
  ${className}
  `}
    />
  );
};

export default Input;
