import './App.scss';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import AmbasadorsMenu from './components/AmbasadorsMenu/AmbasadorsMenu';
import AmbasadorsAvatar from './components/AmbasadorsAvatar/AmbasadorsAvatar';
import AmbasadorsSearch from './components/AmbasadorsSearch/AmbasadorsSearch';
import Table from './components/Table/Table';
import Page from './components/Page/Page';
import ButtonAdd from './components/buttons/buttonAdd';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Ambassadors>
                <AmbasadorsMenu></AmbasadorsMenu>
                <AmbasadorsAvatar></AmbasadorsAvatar>
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
