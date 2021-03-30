import React from 'react';
import {ReactComponent as GitHubIcon} from './../resources/github_icon.svg';
import {ReactComponent as LinkedInIcon} from './../resources/linkedin_icon.svg';
import {ReactComponent as CodePenIcon} from './../resources/codepen_icon.svg';
import {ReactComponent as InstaIcon} from './../resources/insta_icon.svg';
import {Tooltip} from '@material-ui/core';

const Footer = () => {
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
                               rel='noreferrer'
                               target='_blank'>{link.icon}</a>
                        </Tooltip>
                    </li>
                ))}
            </ol>
        </footer>
    );
}

export default Footer;
