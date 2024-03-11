import { Outlet } from 'react-router-dom';
import Popups from '../Popups/Popups';
import Header from '../Header/Header';
import '../../App.scss';
import './Layout.scss';
import PopopsFilter from '../Popups/PopopsFilter';
import PopupAmbasadors from '../Popups/PopupAmbasadors';
import React from 'react';

interface filterpopup {
  filterpopup: boolean;
  setfilterPopup: (value: boolean) => void;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
  onLogout: () => void;
}

const Layout = ({
  filterpopup,
  setfilterPopup,
  handlefilterpopup,
  onLogout,
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

        <Header onLogout={onLogout} />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
