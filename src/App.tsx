import './App.scss';
import Login from './components/Login/Login';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import AmbasadorsMenu from './components/AmbasadorsMenu/AmbasadorsMenu';
import AmbasadorsAvatar from './components/AmbasadorsAvatar/AmbasadorsAvatar';
import AmbasadorsSearch from './components/AmbasadorsSearch/AmbasadorsSearch';
import Table from './components/Table/Table';
import Page from './components/Page/Page';
import ButtonAdd from './components/buttons/buttonAdd';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="signin" element={<Login />} />
          <Route
            index
            element={
              <Ambassadors>
                <AmbasadorsAvatar></AmbasadorsAvatar>
                <AmbasadorsMenu></AmbasadorsMenu>
                <AmbasadorsSearch></AmbasadorsSearch>
                <Table></Table>
                <Page></Page>
                <ButtonAdd></ButtonAdd>
              </Ambassadors>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
