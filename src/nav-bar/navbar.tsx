import React, {useState} from 'react';
import HomeButton from '../home-button/home-button';
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const pathMap = new Map<string, number>([
        ['/experience', 1],
        ['/projects', 2],
        ['/about', 3],
    ]);

    const [activeTab, setActiveTab] = useState(pathMap.get(location.pathname));

    const links = [
        {id: 1, label: 'Experience', link: 'experience'},
        {id: 2, label: 'Projects', link: 'projects'},
        {id: 3, label: 'About Me', link: 'about'},
    ];

    const determineClass = (id: number) => {
        return id === activeTab ? 'm-4 md:mr-0 md:ml-8 whitespace-nowrap underline' : 'm-4 md:mr-0 md:ml-8 whitespace-nowrap'
    }

    return (
        <nav className='w-full sticky top-0'>
            <ol className='flex list-none justify-between items-center'>
                <li onClick={() => setActiveTab(0)} className='m-4 md:ml-0 flex-shrink-0'>
                    <HomeButton bounce={false}/>
                </li>
                <span className='flex ml-auto'>
                {links.map(link => (
                    <li className={determineClass(link.id)}
                        onClick={() => setActiveTab(link.id)}
                        key={link.label}>
                        <Link to={link.link}>{link.label}</Link>
                    </li>
                ))}
                </span>
            </ol>
        </nav>
    );
}

export default NavBar;
