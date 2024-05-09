import React, { useState } from 'react'
import './App.css'
import NavBar from './nav-bar/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/home/home'
import Experience from './routes/experience/experience'
import Projects from './routes/projects/projects'
import AboutMe from './routes/aboutMe/aboutMe'
import Footer from './footer/footer'
import Cvs from './cvs/cvs'
import Uk from './uk/uk'
import ScrollToTop from './scrollToTop'
import Website from './website/website'
import ThemeContext from './theme-context'
import Loutrails from './loutrails/loutrails'
import Clone2048 from './2048clone/2048clone'
import Aesthetic from './aesthetic/aesthetic'

export const RESUME_LINK =
    'https://drive.google.com/file/d/1o4OtepvKwc4sjiDFRJwr_DjC9H2G2dNF/view?usp=sharing'

function App() {
    const [theme, setTheme] = useState('light')
    const value = { theme, setTheme }

    return (
        <div
            className={
                theme === 'dark'
                    ? 'bg-darkMode flex flex-col h-screen hide-scroll md:m-auto md:items-start'
                    : 'flex flex-col h-screen hide-scroll md:m-auto md:items-start'
            }
        >
            <Router>
                <ThemeContext.Provider value={value}>
                    <div
                        className={
                            theme === 'dark'
                                ? 'bg-darkMode flex flex-col items-center flex-foot w-full'
                                : 'flex flex-col items-center flex-foot w-full'
                        }
                    >
                        <NavBar />
                        <ScrollToTop />
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/experience'>
                                <Experience />
                            </Route>
                            <Route exact path='/projects'>
                                <Projects />
                            </Route>
                            <Route exact path='/about'>
                                <AboutMe />
                            </Route>
                            <Route exact path='/cvs'>
                                <Cvs />
                            </Route>
                            <Route exact path='/uk'>
                                <Uk />
                            </Route>
                            <Route exact path='/website'>
                                <Website />
                            </Route>
                            <Route exact path='/loutrails'>
                                <Loutrails />
                            </Route>
                            <Route exact path='/2048clone'>
                                <Clone2048 />
                            </Route>
                            <Route exact path='/aesthetic'>
                                <Aesthetic />
                            </Route>
                        </Switch>
                    </div>
                    <div
                        className={
                            theme === 'dark' ? 'w-full bg-darkMode' : 'w-full'
                        }
                    >
                        <Footer />
                    </div>
                </ThemeContext.Provider>
            </Router>
        </div>
    )
}

export default App
