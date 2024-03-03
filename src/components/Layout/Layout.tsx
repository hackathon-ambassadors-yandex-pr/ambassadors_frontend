import { Outlet } from 'react-router-dom';
import '../../App.scss';

function Layout() {
  return (
    <div className="app">
      <div className="page__container">
        <h1> fgfdgfdgfdgfd</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
