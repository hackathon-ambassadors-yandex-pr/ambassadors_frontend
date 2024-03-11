import './App.scss';
import Login from './components/Login/Login';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
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
import ButtonsContainer from './components/buttons/ButtonsContainer';
import ButtonCancelAmbasadors from './components/buttons/ButtonCancelAmbasadors';
import ButtonsSaveAmbasadors from './components/buttons/ButtonsSaveAmbasadors';
import { CurrentUserContext } from './contexts/CurrentUserContext';

import React, { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRouter/ProtectedRouter';
import MainApi from './utils/MainApi.ts';

function App() {
  const [currentUser, setCurrentUser] = useState<{ email: string }>({
    email: 'Загрузка...',
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  /**
   *
   */
  useEffect(() => {
    const tokenRefresh = localStorage.getItem('refresh');
    console.log('tokenRefresh ', tokenRefresh);
    if (tokenRefresh) {
      MainApi.tokensRefresh(tokenRefresh)
        .then((res) => {
          console.log(res);
          localStorage.setItem('refresh', res.data.refresh);
          localStorage.setItem('access', res.data.access);
          setLoggedIn(true);
        })
        .catch(() => {
          handleLogout();
          //navigate("/signin", {replace: true})
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
      //navigate("/signin", {replace: true})
    }
  }, []);

  /**
   * Авторизация пользователя
   * @param email
   */
  const handleAuthorization = (email: string) => {
    setLoggedIn(true);
    setCurrentUser({ email });
  };

  /**
   * Аутентификация Пользователя
   * @param email
   * @param password
   */
  const handleLogin = async (email: string, password: string) => {
    return await MainApi.signIn(email, password).then((res) => {
      console.log(res);
      localStorage.setItem('refresh', res.data.refresh);
      localStorage.setItem('access', res.data.access);
      handleAuthorization(email);
      return res;
    });
  };

  /**
   * Выход пользователя
   */
  const handleLogout = () => {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    setLoggedIn(false);
  };
  if (!isLoading && !loggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={
                <Layout
                  onLogout={handleLogout}
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
                <AmbasadorsSearch
                  filterpopup={filterpopup}
                  handlefilterpopup={handlefilterpopup}
                ></AmbasadorsSearch>
                <Table></Table>
                <Page></Page>
                <ButtonAdd></ButtonAdd>
              </Ambassadors>
            }
          />
          <Route
            path="creation"
            element={
              <Ambassadors>
                <AmbasadorsHeader>
                  <AmbasadorsContainerSelect></AmbasadorsContainerSelect>
                  <AmbasadorsAvatar></AmbasadorsAvatar>
                </AmbasadorsHeader>
                <AmbasadorsMenu>{data}</AmbasadorsMenu>
                <AmbasadorsCard></AmbasadorsCard>
                <TableAmbasadors
                  filterpopup={filterpopup}
                  handlefilterpopup={handlefilterpopup}
                ></TableAmbasadors>
                <ButtonsContainer className="ambasadors-buttons">
                  <ButtonCancelAmbasadors></ButtonCancelAmbasadors>
                  <ButtonsSaveAmbasadors></ButtonsSaveAmbasadors>
                </ButtonsContainer>
                <Page></Page>
              </Ambassadors>
            }
          />
          <Route
            path="new"
            element={
              <Ambassadors>
                <AmbasadorsHeader>
                  <AmbasadorsContainerSelect></AmbasadorsContainerSelect>
                  <AmbasadorsAvatar></AmbasadorsAvatar>
                </AmbasadorsHeader>
                <AmbasadorsMenu>{data}</AmbasadorsMenu>
                <AmbasadorsCard></AmbasadorsCard>
                <TableAmbasadors
                  filterpopup={filterpopup}
                  handlefilterpopup={handlefilterpopup}
                ></TableAmbasadors>
                <ButtonsContainer className="ambasadors-buttons">
                  <ButtonCancelAmbasadors></ButtonCancelAmbasadors>
                  <ButtonsSaveAmbasadors></ButtonsSaveAmbasadors>
                </ButtonsContainer>
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
