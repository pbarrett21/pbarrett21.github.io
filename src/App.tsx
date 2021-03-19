import React from 'react';
import './App.css';
import FadeIn from 'react-fade-in';
import NavBar from './nav-bar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/home/home';
import Experience from './routes/experience/experience';
import Projects from './routes/projects/projects';
import AboutMe from './routes/aboutMe/aboutMe';
import Footer from './footer/footer';

function App() {
    return (
        <div className='h-screen max-w-full flex flex-col md:max-w-2xl lg:max-w-4xl md:m-auto md:items-start'>
            {/*<FadeIn>*/}
                <Router>
                    <div className='flex-foot'>
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
                {/*<Button onClick={onClickFn} color="secondary">Hello World</Button>*/}
                {/*<HomeButton/>*/}
            {/*</FadeIn>*/}
        </div>
    );
}

// const onClickFn = () => {
//     console.error('=============>test');
// }

export default App;
