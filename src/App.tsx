import './App.scss';
import Login from './components/Login/Login';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import AmbasadorsMenu from './components/AmbasadorsMenu/AmbasadorsMenu';
import AmbasadorsHeader from './components/AmbasadorsHeader/AmbasadorsHeader';
import AmbasadorsSearch from './components/AmbasadorsSearch/AmbasadorsSearch';
import Table from './components/Table/Table';
import TableAmbasadors from './components/Table/TableAmbasadors';
import Page from './components/Page/Page';
import ButtonAdd from './components/buttons/buttonAdd';
import AmbasadorsAvatar from './components/AmbasadorsHeader/AvatarAvatar';
import AmbasadorsContainer from './components/AmbasadorsHeader/AmbasadorsContainer';
import AmbasadorsContainerSelect from './components/AmbasadorsHeader/AmbasadorsContainerSelect';
import AmbasadorsCard from './components/AmbasadorsCard/AmbasadorsCard';
import { CurrentUserContext } from './contexts/CurrentUserContext';

import React, { useState } from 'react';
import ProtectedRoute from './components/ProtectedRouter/ProtectedRouter';

function App() {
  const [currentUser] = useState({
    name: 'Загрузка...',
    about: 'Загрузка...',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const names: Array<string> = [
    'Все',
    'Новый',
    'Активный',
    'Уточняется',
    'На паузе',
    'Архив',
  ];

  const data: Array<string> = [
    'Контактные данные',
    'Образование/работа',
    'Дополнительные данные',
  ];

  const [filterpopup, setfilterPopup] = useState<boolean>(false);

  const handlefilterpopup = () => {
    setfilterPopup(!filterpopup);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="signin"
          element={
            !loggedIn ? <Login onLoggedIn={setLoggedIn} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={
                <Layout
                  onLoggedIn={setLoggedIn}
                  filterpopup={filterpopup}
                  setfilterPopup={setfilterPopup}
                  handlefilterpopup={handlefilterpopup}
                />
              }
              isLoggedIn={loggedIn}
            />
          }
        >
          <Route
            index
            element={
              <Ambassadors>
                <AmbasadorsHeader>
                  <AmbasadorsContainer></AmbasadorsContainer>
                  <AmbasadorsAvatar></AmbasadorsAvatar>
                </AmbasadorsHeader>
                <AmbasadorsMenu>{names}</AmbasadorsMenu>
                <AmbasadorsSearch></AmbasadorsSearch>
                <Table></Table>
                <Page></Page>
                <ButtonAdd
                  filterpopup={filterpopup}
                  handlefilterpopup={handlefilterpopup}
                ></ButtonAdd>
              </Ambassadors>
            }
          />
          <Route
            path="test"
            element={
              <Ambassadors>
                <AmbasadorsHeader>
                  <AmbasadorsContainerSelect></AmbasadorsContainerSelect>
                  <AmbasadorsAvatar></AmbasadorsAvatar>
                </AmbasadorsHeader>
                <AmbasadorsMenu>{data}</AmbasadorsMenu>
                <AmbasadorsCard></AmbasadorsCard>
                <TableAmbasadors></TableAmbasadors>
                <Page></Page>
              </Ambassadors>
            }
          />
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
