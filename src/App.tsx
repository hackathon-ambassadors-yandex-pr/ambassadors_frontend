import './App.scss';
import Ambassadors from './components/Ambassadors/Ambassadors';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ambassadors />} />
      </Routes>
    </>
  );
}

export default App;
