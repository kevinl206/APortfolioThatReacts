import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
function App() {


    return (
        <Router> 
        <div className="App">
         <Header>
          <Nav> </Nav>
        </Header>
        <main>
         <Routes>
            <Route path="/" element= {<About/>}/>
            <Route path="/" element= {<Portfolio/>}/>
            <Route path="/" element= {<Contact/>}/>
            <Route path="/" element= {<Resume/>}/>
 
         </Routes>
        

      
        </main>
         <Footer/>
        </div>
        </Router>
      );
    }

  
  export default App;