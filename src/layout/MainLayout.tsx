import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

const MainLayout: FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLayout;
