import React from 'react';
import { ReactComponent as GitHubIcon } from './../resources/github_icon.svg';
import { ReactComponent as LinkedInIcon } from './../resources/linkedin_icon.svg';
import { ReactComponent as CodePenIcon } from './../resources/codepen_icon.svg';
import { ReactComponent as InstaIcon } from './../resources/insta_icon.svg';

const Footer = () => {
    const links = [
        {icon: <GitHubIcon/>, link: 'https://github.com/pbarrett21'},
        {icon: <LinkedInIcon/>, link: 'https://www.linkedin.com/in/pbarrett21/'},
        {icon: <CodePenIcon/>, link: 'https://codepen.io/paulbarrett'},
        {icon: <InstaIcon/>, link: 'https://www.instagram.com/paulbarr21/'},
    ];
    return (
        <footer className='flex-shrink-0 md:w-19/20'>
            <ol className='flex list-none justify-between m-4'>
                {links.map(link => (
                    <li key={link.link}>
                        <a href={link.link}
                           rel="noreferrer"
                           target='_blank'>{link.icon}</a>
                    </li>
                ))}
            </ol>
        </footer>
    );
}

export default Footer;
