import React from 'react';
import './App.css';
import FadeIn from 'react-fade-in';
import NavBar from './nav-bar/navbar';

function App() {
    return (
        <FadeIn>
            <NavBar/>
            <br></br>
            <h1>Hello World! This site is under construction 🚧</h1>
            {/*<Button onClick={onClickFn} color="secondary">Hello World</Button>*/}
            {/*<HomeButton/>*/}
        </FadeIn>
    );
}

const onClickFn = () => {
    console.error('=============>test');
}

export default App;
