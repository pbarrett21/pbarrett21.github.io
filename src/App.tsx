import React from 'react';
import './App.css';
import {Button} from '@material-ui/core';
import FadeIn from 'react-fade-in';
import HomeButton from './home-button/home-button';

function App() {
    return (
        <FadeIn>
            <h1 className='text-5xl'>Hello World! This site is under construction 🚧</h1>
            <Button onClick={onClickFn} color="secondary">Hello World</Button>
            <HomeButton/>
        </FadeIn>
    );
}

const onClickFn = () => {
    console.error('=============>test');
}

export default App;
