import React, { Fragment } from 'react';
import './App.css';
//import PrimerComponente from './components/PrimerComponente';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';


function App() {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo="Tienda virtual"
      />
      <ProductsList 

      />
      <Footer
        fecha = {fecha}
      />
    </Fragment>
    
  );
}

export default App;
