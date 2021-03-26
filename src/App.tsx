import React from 'react';
import './App.css';
import NavBar from './nav-bar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/home';
import Experience from './routes/experience/experience';
import Projects from './routes/projects/projects';
import AboutMe from './routes/aboutMe/aboutMe';
import Footer from './footer/footer';

function App() {
    return (
        <div
            className='flex flex-col h-screen overflow-auto hide-scroll max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto md:items-start'>
            <Router>
                <div className='flex-foot w-full'>
                    <NavBar/>
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
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
