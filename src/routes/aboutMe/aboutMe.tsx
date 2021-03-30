import React from 'react';
import './about-me-styles.scss';

const AboutMe = () => {
    return (
        <div className='max-w-full md:max-w-2xl lg:max-w-2xl m-4'>
            <h1 className='font-semibold text-2xl mt-10 mb-6'>Career</h1>
            <p className='text-lg font-normal ml-8'>
                I am a software developer with over 2 years of professional experience. I
                have been immersed in an agile development environment and have been fortunate to work with
                fantastic teammates on many interesting projects while using modern technologies. I have
                enjoyed being able to participate and contribute in the planning of new products and then to create and
                bring that vision to life.
            </p>

            <h1 className='font-semibold text-2xl mt-10 mb-6'>Education</h1>
            <div>
                <p className='text-lg font-medium ml-8'>B.S. in Computer Science with Minor in Mathematics</p>
                <p className='text-lg font-normal ml-8'>University of Kentucky, 2015 - 2019</p>
            </div>

            <h1 className='font-semibold text-2xl mt-10 mb-6'>Hobbies and Interests</h1>
            <p className='text-lg font-normal ml-8'>
                I have many hobbies and interests outside of my professional life!
            </p>
            <ul className='pt-4 pl-16'>
                <li>Mountain Biking 🚴</li>
                <li>Hiking 🌲</li>
                <li>Photography 📷</li>
                <li>Paddleboarding 🏄‍♂️</li>
                <li>Cats 🐈</li>
            </ul>

            <h1 className='font-semibold text-2xl mt-10 mb-6'>Links</h1>
            <p className='text-lg font-normal ml-8'>
                Here are some useful or relevant links:
            </p>
            <ul className='pt-4 pl-16'>
                <li><a className='underline hover:text-green-600'
                       href='https://github.com/pbarrett21/tools-and-gadgets/blob/main/README.md'
                       rel='noreferrer'
                       target='_blank'>Tools I use 🛠</a></li>
                <li><a className='underline hover:text-green-600'
                       href='https://github.com/pbarrett21'
                       rel='noreferrer'
                       target='_blank'>Github</a></li>
                <li><a className='underline hover:text-green-600'
                       href='https://www.linkedin.com/in/pbarrett21/'
                       rel='noreferrer'
                       target='_blank'>LinkedIn</a></li>
                <li><a className='underline hover:text-green-600'
                       href='https://codepen.io/paulbarrett'
                       rel='noreferrer'
                       target='_blank'>CodePen</a></li>
                <li><a className='underline hover:text-green-600'
                       href='https://www.instagram.com/paulbarr21/'
                       rel='noreferrer'
                       target='_blank'>Instagram</a></li>
            </ul>

            <h1 className='font-semibold text-2xl mt-10 mb-6'>Resume</h1>
            <p className='text-lg font-normal ml-8'>
                Feel free to take a look at my
                <a className='font-medium underline ml-1 hover:text-green-600'
                   href='https://drive.google.com/file/d/1UFIC8bJuODdCSyClckDhMijGcVw7TUgZ/view?usp=sharing'
                   rel='noreferrer'
                   target='_blank'>resume</a>
            </p>
        </div>
    );
}

export default AboutMe;
