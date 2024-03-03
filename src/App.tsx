import './App.scss';
import Header from './components/header/header';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <div className="page__container">
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Ambassadors />} />
            <Route />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
