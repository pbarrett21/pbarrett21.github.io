import React from 'react';
import './App.css';
import NavBar from './nav-bar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/home';
import Experience from './routes/experience/experience';
import Projects from './routes/projects/projects';
import AboutMe from './routes/aboutMe/aboutMe';
import Footer from './footer/footer';
import Cvs from './cvs/cvs';
import Uk from './uk/uk';
import ScrollToTop from './scrollToTop';

function App() {
    return (
        <div
            className='flex flex-col h-screen hide-scroll md:m-auto md:items-start'>
            <Router>
                <div className='flex flex-col items-center flex-foot w-full'>
                    <NavBar/>
                    <ScrollToTop/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/experience">
                            <Experience/>
                        </Route>
                        <Route exact path="/projects">
                            <Projects/>
                        </Route>
                        <Route exact path="/about">
                            <AboutMe/>
                        </Route>
                        <Route exact path="/cvs">
                            <Cvs/>
                        </Route>
                        <Route exact path="/uk">
                            <Uk/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
