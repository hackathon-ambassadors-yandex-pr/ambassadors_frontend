import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import PopupFilter from '../PopupFilter/PopupFilter';
import '../../App.scss';
import './Layout.scss';

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
        <PopupFilter
          filterpopup={filterpopup}
          setfilterPopup={setfilterPopup}
          handlefilterpopup={handlefilterpopup}
        />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
