import React, {useEffect, useState} from 'react';
import HomeButton from '../home-button/home-button';
import {Link, useHistory} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import './navbar-styles.scss';

const NavBar = () => {
    const location = useLocation();
    const history = useHistory();

    const links = [
        {id: 1, label: 'Experience', link: 'experience'},
        {id: 2, label: 'Projects', link: 'projects'},
        {id: 3, label: 'About Me', link: 'about'},
    ];

    const pathMap = new Map<string, number>([
        ['/', 0],
        ['/experience', 1],
        ['/projects', 2],
        ['/about', 3],
    ]);

    // set initial navbar current tab when going to specific route without clicking on navbar
    // eg going to address bar and typing url/experience
    const [activeTab, setActiveTab] = useState(pathMap.get(location.pathname));

    // conditionally add underline
    const determineClass = (id: number) => {
        const classInfo = 'm-4 md:ml-8 whitespace-nowrap';
        return id === activeTab ? classInfo + ' selected-tab' : classInfo
    }

    // currently handles history.push route changes like from home page view experience button
    useEffect(() => {
        // equivalent to component mount
        const unlisten = history.listen(currentLocation => {
            setActiveTab(pathMap.get(currentLocation.pathname));
        })
        return () => {
            // equivalent to component unmount
            // unsubscribe from history listen on unmount
            unlisten();
        }
    })

    return (
        activeTab !== undefined ?
            <nav className='w-full sticky -top-1 bg-white'>
                <ol className='flex list-none justify-between items-center max-w-full md:max-w-2xl lg:max-w-2xl m-auto'>
                    <li onClick={() => setActiveTab(0)} className='m-4 flex-shrink-0'>
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
            :
            <nav className='w-full sticky -top-1 bg-white'>
                <ol className='flex list-none max-w-full md:max-w-2xl lg:max-w-2xl m-auto'>
                    <li className='m-4 flex'>
                        <Link className='flex' to='/experience'>
                            <svg className='mr-2 transform rotate-180' fill="none" height="24" stroke="#000" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2"
                                 viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4" x2="20" y1="12" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                            <span>Go Back</span>
                        </Link>
                    </li>
                </ol>
            </nav>
    );
}

export default NavBar;
