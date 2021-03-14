import React from 'react';
import './App.css';
import {Button, CssBaseline} from '@material-ui/core';
import FadeIn from 'react-fade-in';

function App() {
    return (
        <CssBaseline>
            <FadeIn>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
                <h1>Hello World! This site is under construction 🚧</h1>
                <Button onClick={onClickFn} color="secondary">Hello World</Button>
            </FadeIn>
        </CssBaseline>
    );
}

const onClickFn = () => {
    console.error('=============>test');
}

export default App;
