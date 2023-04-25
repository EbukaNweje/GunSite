import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Footer1 from './Components/Footer/Footer1';
import Footer2 from './Components/Footer/Footer2';
import Footer3 from './Components/Footer/Footer3';


const App = () => {
  return (
    <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Footer1/>
        <Footer2/>
        <Footer3/>
    </BrowserRouter>
  );
}

export default App;
