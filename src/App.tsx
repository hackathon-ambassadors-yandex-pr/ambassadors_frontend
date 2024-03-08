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
import ButtonSave from './components/buttons/ButtonSave';
import ButtonCancel from './components/buttons/ButtonCancel';

import { useState } from 'react';

function App() {
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
    <>
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout
              filterpopup={filterpopup}
              setfilterPopup={setfilterPopup}
              handlefilterpopup={handlefilterpopup}
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
                <ButtonsContainer className="ambasadors-buttons">
                  <ButtonCancel></ButtonCancel>
                  <ButtonSave></ButtonSave>
                </ButtonsContainer>
                <Page></Page>
              </Ambassadors>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
