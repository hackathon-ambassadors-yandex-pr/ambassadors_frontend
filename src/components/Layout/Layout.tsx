import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import PopupFilter from '../PopupFilter/PopupFilter';
import '../../App.scss';
import './Layout.scss';

interface filterpopup {
  filterpopup: boolean;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
}

const Layout = ({ filterpopup, handlefilterpopup }: filterpopup) => {
  return (
    <div className="app">
      <div className="page__container">
        <PopupFilter
          filterpopup={filterpopup}
          handlefilterpopup={handlefilterpopup}
        />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
