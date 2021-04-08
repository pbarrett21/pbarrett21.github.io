import React, {useContext} from 'react';
import './website-styles.scss';
import ThemeContext from '../theme-context';
import GoToButton from '../go-to-button/goToButton';

const Website = () => {

    const theme = useContext(ThemeContext).theme;

    return (
        <div className={theme === 'dark' ?
            'text-white w-full md:max-w-2xl lg:max-w-2xl'
            : 'w-full md:max-w-2xl lg:max-w-2xl'}>
            <div className='w-full flex website-gradient'>
                <h1 className='head-container-website md:ml-16 md:text-4xl'>Portfolio Website</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>I decided to create this website as an exercise to both give myself an
                    opportunity to create a responsive website and also to serve as a platform for my current portfolio
                    as well as
                    future experiences or projects.</p>

                <h1 className='font-semibold mt-10'>Technologies</h1>
                <p className='ml-4'>React (with Typescript),
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://tailwindcss.com/'
                       rel='noreferrer'
                       target='_blank'>Tailwind CSS</a>
                    , Github Pages, Sass, Javascript, HTML</p>
                <p className='ml-4 mt-2'>This was my first time using React with Typescript (.tsx) and I was very glad
                    to be able to benefit from both technologies. This was also my first time using the CSS framework
                    Tailwind CSS and I was very impressed with how easy it was to pick up and how it accelerated the
                    designs.</p>

                <h1 className='font-semibold mt-10'>Design</h1>
                <p className='ml-4'>I learned a great deal about implementing responsive design from this project. I
                    greatly benefited from the prototyping tool
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://www.figma.com/'
                       rel='noreferrer'
                       target='_blank'>Figma</a> to design screens and flow before building. The Google Chrome devtools
                    Device Mode also enabled me to simulate this website on different screen sizes and mobile devices.
                </p>

                <div className='flex justify-center mt-4'>
                    <a className='flex'
                       href='https://github.com/pbarrett21/pbarrett21.github.io/tree/develop'
                       rel='noreferrer'
                       target='_blank'>
                        <GoToButton text={'View the Code'}/>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Website;
