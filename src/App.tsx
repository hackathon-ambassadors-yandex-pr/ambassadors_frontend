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

  return (
    <>
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="/" element={<Layout />}>
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
                <ButtonAdd></ButtonAdd>
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
                <TableAmbasadors></TableAmbasadors>
              </Ambassadors>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
