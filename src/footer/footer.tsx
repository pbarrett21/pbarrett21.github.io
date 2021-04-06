import React, {useState} from 'react';
import {ReactComponent as GitHubIcon} from './../resources/github_icon.svg';
import {ReactComponent as LinkedInIcon} from './../resources/linkedin_icon.svg';
import {ReactComponent as CodePenIcon} from './../resources/codepen_icon.svg';
import {ReactComponent as InstaIcon} from './../resources/insta_icon.svg';
import {Tooltip} from '@material-ui/core';

const Footer = () => {

    const [darkmode, setDarkMode] = useState(false);

    const links = [
        {icon: <GitHubIcon/>, hoverText: 'Github', link: 'https://github.com/pbarrett21'},
        {icon: <LinkedInIcon/>, hoverText: 'LinkedIn', link: 'https://www.linkedin.com/in/pbarrett21/'},
        {icon: <CodePenIcon/>, hoverText: 'CodePen', link: 'https://codepen.io/paulbarrett'},
        {icon: <InstaIcon/>, hoverText: 'Instagram', link: 'https://www.instagram.com/paulbarr21/'},
    ];
    return (
        <footer className='flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4'>
            <ol className='flex list-none m-4 justify-between'>
                {links.map(link => (
                    <li key={link.link}>
                        <Tooltip title={link.hoverText}
                                 aria-label={link.hoverText}
                                 enterDelay={300}
                                 leaveDelay={200}
                                 placement='top'>
                            <a href={link.link}
                               aria-label={link.hoverText}
                               rel='noreferrer'
                               target='_blank'>{link.icon}</a>
                        </Tooltip>
                    </li>
                ))}
                {darkmode ? (
                    <li>
                        <Tooltip title='Light Mode'
                                 aria-label='Light Mode'
                                 enterDelay={300}
                                 leaveDelay={200}
                                 placement='top'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        </Tooltip>
                    </li>
                ) : (
                    <li onClick={}>
                        <Tooltip title='Dark Mode'
                                 aria-label='Dark Mode'
                                 enterDelay={300}
                                 leaveDelay={200}
                                 placement='top'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </Tooltip>
                    </li>
                )}
            </ol>
        </footer>
    );
}

export default Footer;
