import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className='max-w-[1150px] h-full mx-auto px-[20px]'>{children}</div>
  );
};

export default Container;
