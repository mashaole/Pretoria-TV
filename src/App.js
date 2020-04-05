import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBAr';
import TopDiv from './TopDiv';
import Footer from './Footer';
import Subscription from './Subscription';
import ContactUs from './ContactUs';
import CountDown from './CountDown';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <TopDiv />
      <CountDown />
      <Subscription />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
