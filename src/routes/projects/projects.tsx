import React from 'react';
import {Chip} from '@material-ui/core';

const Projects = () => {
    return (
        <div className='max-w-full md:max-w-2xl lg:max-w-2xl m-4'>
            <img className='m-auto lg:max-w-xl mb-8 mt-8'
                 src={require('./../../resources/website.png').default}
                 alt='My website'/>
            <h1 className='font-bold lg:font-extrabold mt-8 text-2xl mb-4'>Portfolio Website</h1>
            <p className='lg:text-lg'>Creating this website has been an enjoyable opportunity to try my hand at
                responsive design and CSS animation as well as to explore new technologies and tools.</p>
            <div className='mt-2 flex justify-end'>
                <Chip label="React" size="small" color="primary" variant="outlined"/>
                <Chip className='ml-1' size="small" label="Tailwind CSS" color="primary" variant="outlined"/>
                <Chip className='ml-1' size="small" label="Responsive Design" color="primary" variant="outlined"/>
            </div>
            <div className='flex justify-center mt-4'>
                <button className='flex' onClick={() => console.log('learn more')}>
                    <span>Learn More</span>
                    <svg className='ml-2' fill="none" height="24" stroke="#000" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2"
                         viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <polyline points="14 6 20 12 14 18"/>
                    </svg>
                </button>
            </div>
            <h1 className='mt-16 text-lg lg:text-2xl font-semibold flex justify-center'>More to come, soon...</h1>
        </div>
    );
}

export default Projects;
