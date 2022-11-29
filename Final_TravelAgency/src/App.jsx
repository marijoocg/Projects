import React from "react";
import Login from "./components/Login";
import MainPage from "./components/MainPage1";
import HotelRes from "./components/HotelRes";
import History from "./components/History";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Flights from './components/flights.jsx';
import Form from './components/form.jsx';

function App() {
  //no funciona el redirect del Login
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/Mainpage'
          element={<MainPage />}
        />
        <Route
          path='/Reservations'
          element={<HotelRes />}
        />
        <Route
          path='/History'
          element={<History />}
        />
        <Route
          path='/Flights'
          element={<Flights />}
        />
        <Route
          path='/Form'
          element={<Form />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
