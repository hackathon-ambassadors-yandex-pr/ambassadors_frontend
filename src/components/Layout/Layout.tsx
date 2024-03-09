import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Popups from '../Popups/Popups';
import '../../App.scss';
import './Layout.scss';
import PopopsFilter from '../Popups/PopopsFilter';
import PopupAmbasadors from '../Popups/PopupAmbasadors';

interface filterpopup {
  filterpopup: boolean;
  setfilterPopup: (value: boolean) => void;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
}

const Layout = ({
  filterpopup,
  setfilterPopup,
  handlefilterpopup,
}: filterpopup) => {
  return (
    <div className="app">
      <div className="page__container">
        <Popups
          filterpopup={filterpopup}
          setfilterPopup={setfilterPopup}
          handlefilterpopup={handlefilterpopup}
        >
          {location.pathname === '/' ? (
            <PopopsFilter setfilterPopup={setfilterPopup}></PopopsFilter>
          ) : (
            <PopupAmbasadors setfilterPopup={setfilterPopup}></PopupAmbasadors>
          )}
        </Popups>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
