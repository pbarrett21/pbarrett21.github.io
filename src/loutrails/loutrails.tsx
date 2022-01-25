import React, {useContext} from 'react';
import './loutrails-styles.scss';
import ThemeContext from '../theme-context';
import GoToButton from '../go-to-button/goToButton';

const Loutrails = () => {

    const theme = useContext(ThemeContext).theme;

    return (
        <div className={theme === 'dark' ?
            'text-white w-full md:max-w-2xl lg:max-w-2xl'
            : 'w-full md:max-w-2xl lg:max-w-2xl'}>
            <div className='w-full flex loutrails-gradient'>
                <h1 className='head-container-website md:ml-16 md:text-4xl'>LouTrails</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>I decided to create LouTrails to give myself an opportunity to work with a
                    few technologies I've been interested in using a topic (nature and trails) that is a hobby of
                    mine.</p>

                <h1 className='font-semibold mt-10'>Technologies</h1>
                <p className='ml-4'>React (with Typescript),
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://styled-components.com/'
                       rel='noreferrer'
                       target='_blank'>Styled Components</a>,
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://www.gatsbyjs.com/'
                       rel='noreferrer'
                       target='_blank'>Gatsby</a>,
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://www.mapbox.com/mapbox-gljs'
                       rel='noreferrer'
                       target='_blank'>Mapbox GL JS</a>
                    , Netlify CMS</p>
                <p className='ml-4 mt-2'>This was my first time using Gatsby, Styled Components, and Mapbox and I am
                    very pleased with the end result. Gatsby did a great job of optimizing otherwise tedious tasks like
                    image optimization, lazy-loading, and code splitting. As a result, LouTrails is very quick and
                    lightweight. Styled Components was very nice to use and improved organization greatly, especially in
                    comparison to Tailwind CSS. Mapbox tied it all together by providing a clean and fast client-side
                    map experience.</p>

                <h1 className='font-semibold mt-10'>Noteworthy</h1>
                <p className='ml-4'>Besides the maps created from Mapbox, this entire website was created without the
                    help of outside libraries. I originally considered bringing in a library to create the search bar or
                    dropdown but instead opted to create my own to keep them entirely customizable. Creating a
                    functional filterable searchbar and dropdown proved to be more complicated than anticipated - but
                    was a great learning experience.
                </p>

                <h1 className='font-semibold mt-10'>Design</h1>
                <p className='ml-4'>Once again, I implemented
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://www.figma.com/'
                       rel='noreferrer'
                       target='_blank'>Figma</a> to design screens and flow before building this project.
                </p>

                <div className='flex justify-center mt-4'>
                    <a className='flex'
                       href='https://loutrails.netlify.app/'
                       rel='noreferrer'
                       target='_blank'>
                        <GoToButton text={'Go to LouTrails'}/>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Loutrails;
