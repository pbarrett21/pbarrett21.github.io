import React from 'react';
import HomeButton from '../home-button/home-button';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const links = [
        {label: 'Experience', link: 'experience'},
        {label: 'Projects', link: 'projects'},
        {label: 'About Me', link: 'about'},
    ];
    return (
        <nav className='w-full'>
            <ol className='flex list-none justify-between'>
                <li className='m-4 md:ml-0 flex-shrink-0'><HomeButton/></li>
                <span className='flex ml-auto'>
                {links.map(link => (
                    <li key={link.label} className='m-4 md:mr-0 md:ml-8 whitespace-nowrap'>
                        <Link to={link.link}>{link.label}</Link>
                    </li>
                ))}
                </span>
            </ol>
        </nav>
    );
}

export default NavBar;
