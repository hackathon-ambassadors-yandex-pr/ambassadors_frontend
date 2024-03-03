import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import '../../App.scss';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="app">
      <div className="page__container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
