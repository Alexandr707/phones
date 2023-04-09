import { AnchorHTMLAttributes, FC } from 'react';
import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItemProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  to: string;
  label?: string;
  icon?: IconType;
}

const NavigationItem: FC<NavigationItemProps> = ({
  icon: Icon,
  to,
  label,
  className,
}) => {
  const { pathname } = useLocation();
  const isCurrent = pathname === to;

  return (
    <div className='relative'>
      <Link
        to={to}
        className={`
        
        text-xs
        font-black
        hover:underline
        transition
        px-4
        ${isCurrent ? 'text-navyBlue' : 'text-charcoal'}
        ${Icon ? 'pr-8' : ''}
        ${className}
      `}
      >
        {label || ''}
        {!!Icon && (
          <Icon
            size={20}
            className='absolute right-0 top-1/2 -translate-y-1/2 roundded-full'
          />
        )}
      </Link>
    </div>
  );
};

export default NavigationItem;
