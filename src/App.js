import './App.css';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<SignUp />} />
      <Route path="/success" exact element={<SignUpConfirmation />} />
    </Routes>
  );
}

export default App;
