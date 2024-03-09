import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import PopupFilter from '../PopupFilter/PopupFilter';
import '../../App.scss';
import './Layout.scss';

interface filterpopup {
  filterpopup: boolean;
  setfilterPopup: (value: boolean) => void;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
  onLoggedIn: (loggedIn: boolean) => void;
}

const Layout = ({
  filterpopup,
  setfilterPopup,
  handlefilterpopup,
  onLoggedIn,
}: filterpopup) => {
  return (
    <div className="app">
      <div className="page__container">
        <PopupFilter
          filterpopup={filterpopup}
          setfilterPopup={setfilterPopup}
          handlefilterpopup={handlefilterpopup}
        />
        <Header onLoggedIn={onLoggedIn} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
