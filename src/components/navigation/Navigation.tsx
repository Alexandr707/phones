import { FC, PropsWithChildren } from 'react';
import { CgProfile } from 'react-icons/cg';
import Container from '../Container';
import NavigationItem from './NavigationItem';

const Navigation: FC<PropsWithChildren<unknown>> = () => {
  return (
    <div className='w-screen h-[100px]  border-b-[1px] border-b-quickSilver'>
      <Container>
        <div className='w-full h-full flex justify-between items-center'>
          <NavigationItem to='/' label='Каталог' className='pl-0' />
          <div className='flex'>
            <NavigationItem to='/compare' label='Сравнить' />
            <NavigationItem to='/lk' label='Личный кабинет' icon={CgProfile} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
