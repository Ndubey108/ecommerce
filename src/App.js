import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Pages/Home.js';
import Cart from './Pages/Cart.js';
import Navbar from './Components/Navbar';
import Caraousel from './Components/Caraousel.js';
import Footer from './Components/Footer.js'
import store from './Pages/store/store.js'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar /><br/>
          <Caraousel/>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>

        </BrowserRouter>
     
      </Provider>
      <Footer/>
    </div>

  );
}

export default App;
