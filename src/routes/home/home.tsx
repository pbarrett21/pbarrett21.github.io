import React, {useContext} from 'react';
import './home-styles.css';
import {useHistory} from "react-router-dom";
import ThemeContext from '../../theme-context';

const Home = () => {
    const history = useHistory();

    const theme = useContext(ThemeContext).theme;

    const showExperience = () => {
        history.push("/experience");
    }

    return (
        <div className={theme !== 'dark' ?
            'max-w-full md:max-w-2xl lg:max-w-2xl m-4'
            : 'text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4'}>
            <img className='rounded shadow-md'
                 src={require('./../../resources/cup-of-coffee.jpeg').default}
                 alt='macbook and coffee'/>
            <div className='md:flex md:flex-col md:items-center'>
                <h1 className='text-xl font-semibold mt-6 mb-6 md:ml-auto md:mr-auto'>Hey there, I'm Paul 👋</h1>
                <h1 className='text-lg font-normal'>I am a software developer dedicated to
                    constant improvement and exploration</h1>
            </div>

            <div className='md:flex md:flex-col md:items-center mt-6'>
                <span className='text-lg font-normal mt-6 mb-6 md:ml-auto md:mr-auto'>
                Download my
                    <a className='font-medium underline ml-1 hover:text-green-600'
                       href='https://drive.google.com/file/d/1Bf8Yqsyx78_HYSKCbPKTby_3TZQCGn9x/view?usp=sharing'
                       rel='noreferrer'
                       target='_blank'>resume</a>
                </span>
            </div>

            <button className='flex mt-10 md:ml-auto md:mr-auto' onClick={showExperience}>
                <div className='back-container'>
                    <span>Check out my experience</span>
                    <svg className='arrow-bounce ml-2' fill="none" height="24" stroke="#000" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2"
                         viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <polyline points="14 6 20 12 14 18"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default Home;
