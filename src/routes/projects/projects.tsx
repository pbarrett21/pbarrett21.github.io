import React, {useContext} from 'react';
import {Chip} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import ThemeContext from '../../theme-context';
import GoToButton from '../../go-to-button/goToButton';

const Projects = () => {

    const theme = useContext(ThemeContext).theme;

    const history = useHistory();

    return (
        <div className={theme === 'dark' ?
            'text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4'
            : 'max-w-full md:max-w-2xl lg:max-w-2xl m-4'}>
            <img className='m-auto lg:max-w-xl mb-8 mt-8'
                 src={require('./../../resources/websitejpg.jpeg').default}
                 alt='Website'/>
            <h1 className='font-bold lg:font-extrabold mt-8 text-2xl mb-4'>Portfolio Website</h1>
            <p className='lg:text-lg'>Creating this website has been an enjoyable opportunity to try my hand at
                responsive design and CSS animation as well as to explore new technologies and tools.</p>
            <div className='mt-2 flex justify-end'>
                <Chip label="React" size="small" color="primary" variant="outlined"/>
                <Chip className='ml-1' size="small" label="Tailwind CSS" color="primary" variant="outlined"/>
                <Chip className='ml-1' size="small" label="Responsive Design" color="primary" variant="outlined"/>
            </div>
            <div className='flex justify-center mt-4'>
                <button className='flex' onClick={() => history.push('/website')}>
                    <GoToButton text={'Learn More'}/>
                </button>
            </div>
            <h1 className='mt-16 text-lg lg:text-2xl font-semibold flex justify-center'>More to come, soon...</h1>
        </div>
    );
}

export default Projects;
