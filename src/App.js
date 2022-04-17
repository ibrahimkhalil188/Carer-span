import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
