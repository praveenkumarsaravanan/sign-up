import './App.css';
import SignUp from './components/SignUp';
import Success from './components/Success';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<SignUp />} />
      <Route path="/success" exact element={<Success />} />
    </Routes>
  );
}

export default App;
