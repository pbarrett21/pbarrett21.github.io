import React, {useContext, useState} from 'react';
import {Tooltip} from '@material-ui/core';
import ThemeContext from '../theme-context';

const Footer = () => {

    const [darkMode, setMode] = useState(true);

    const links = [
        {
            icon:
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        fill="none" stroke={darkMode ? 'white' : 'black'} strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2"/>
                </svg>, hoverText: 'Github', link: 'https://github.com/pbarrett21'
        },
        {
            icon:
                <svg fill="none" height="24" stroke={darkMode ? 'white' : 'black'} strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect height="12" width="4" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>, hoverText: 'LinkedIn', link: 'https://www.linkedin.com/in/pbarrett21/'
        },
        {
            icon:
                <svg fill="none" height="24" stroke={darkMode ? 'white' : 'black'} strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                    <line x1="12" x2="12" y1="22" y2="15.5"/>
                    <polyline points="22 8.5 12 15.5 2 8.5"/>
                    <polyline points="2 15.5 12 8.5 22 15.5"/>
                    <line x1="12" x2="12" y1="2" y2="8.5"/>
                </svg>, hoverText: 'CodePen', link: 'https://codepen.io/paulbarrett'
        },
        {
            icon:
                <svg fill="none" height="24" stroke={darkMode ? 'white' : 'black'} strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="2"
                     viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
                </svg>, hoverText: 'Instagram', link: 'https://www.instagram.com/paulbarr21/'
        },
    ];

    const themeContext = useContext(ThemeContext);

    const setDarkMode = () => {
        setMode(!darkMode);
        themeContext.setTheme(!darkMode ? 'dark' : 'light');
    }

    return (
        <footer className={darkMode ?
            'flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4 bg-darkMode' :
            'flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4'}>
            <ol className='flex list-none m-4 justify-between'>
                {links.map(link => (
                    <li key={link.link}>
                        <Tooltip title={link.hoverText}
                                 aria-label={link.hoverText}
                                 enterDelay={800}
                                 leaveDelay={200}
                                 placement='top'>
                            <a href={link.link}
                               aria-label={link.hoverText}
                               rel='noreferrer'
                               target='_blank'>{link.icon}</a>
                        </Tooltip>
                    </li>
                ))}
                {darkMode ? (
                    <li onClick={setDarkMode}>
                        <Tooltip title='Light Mode'
                                 aria-label='Light Mode'
                                 enterDelay={800}
                                 leaveDelay={200}
                                 placement='top'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20"
                                 fill="white">
                                <path fillRule="evenodd"
                                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                      clipRule="evenodd"/>
                            </svg>
                        </Tooltip>
                    </li>
                ) : (
                    <li onClick={setDarkMode}>
                        <Tooltip title='Dark Mode'
                                 aria-label='Dark Mode'
                                 enterDelay={300}
                                 leaveDelay={200}
                                 placement='top'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                        </Tooltip>
                    </li>
                )}
            </ol>
        </footer>
    );
}

export default Footer;
