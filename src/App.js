import './App.css';
import UserRegistraton from './components/UserRegistraton';
import UserRegistratonConfirmation from './components/UserRegistratonConfirmation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<UserRegistraton />} />
      <Route path="/success" exact element={<UserRegistratonConfirmation />} />
    </Routes>
  );
}

export default App;
