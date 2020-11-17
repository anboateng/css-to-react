import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route,} from 'react-router-dom'
import Basics from './components/Basics';
import Types from './components/Types';
import Safety from './components/Safety';
import Equipment from './components/Equipment';
import Where from './components/Where';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App ()
{
  return (
    <div id="wrapper">
      <Header/>
      <BrowserRouter>
      <div>
        <Navigation/>
      <Switch>
        <Route exact path="/" component={Basics} />
        <Route path="/Types" component={Types} />
        <Route path="/Safety" component={Safety} />
        <Route path="/Equipment" component={Equipment} />
        <Route path="/Where" component={Where} />
      </Switch>
    </div>
  </BrowserRouter>
  <Footer/>
    </div>
  );

};


export default App;




 
