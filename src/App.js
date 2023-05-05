import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";

import Contact from "./components/Contact";
function App() {


    return (
        <Router> 
        <div className="App">
         <Header>
       <Navigation/>
        </Header>
        <main>
         <Routes>
            <Route path="/" element= {<About/>}/>
            <Route path="/" element= {<Portfolio/>}/>
            <Route path="/" element= {<Contact/>}/>
            <Route path="/" element= {<Navigation/>}/>
            <Route path="/" element= {<Footer/>}/>
            <Route path="/" element= {<Header/>}/>
            <Route path="/" element= {<Project/>}/>
 
         </Routes>
        

      
        </main>
         <Footer/>
        </div>
        </Router>
      );
    }

  
  export default App;