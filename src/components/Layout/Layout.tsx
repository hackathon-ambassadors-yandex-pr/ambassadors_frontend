import { Outlet } from 'react-router-dom';
import '../../App.scss';
import './Layout.scss';

function Layout() {
  return (
    <div className="app">
      <div className="page__container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
