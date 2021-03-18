import React from 'react';
import './App.css';
import FadeIn from 'react-fade-in';
import NavBar from './nav-bar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/home/home';
import Experience from './routes/experience/experience';
import Projects from './routes/projects/projects';
import AboutMe from './routes/aboutMe/aboutMe';

function App() {
    return (
        <div className='max-w-full md:flex md:flex-col md:max-w-2xl lg:max-w-4xl md:m-auto md:items-start'>
            {/*<FadeIn>*/}
                <Router>
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
                </Router>
                <h1 className='pt-12'>Hello World! This site is under construction 🚧</h1>
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
