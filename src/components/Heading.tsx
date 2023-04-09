import { FC } from 'react';

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ title, className }) => {
  return (
    <h2
      className={`text-[48px] leading-5 text-oldSilver font-bold ${
        className || ''
      }`}
    >
      {title}
    </h2>
  );
};

export default Heading;
