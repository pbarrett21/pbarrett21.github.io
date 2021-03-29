import React from 'react';

const LearnMore = (props: {
    cardTitle: string,
    imgSrc: any,
    imgAlt: string,
    blurb: string,
    role: string,
    dates: string,
    technologies: string
}) => {
    return (
        <div>
            <img className='m-auto lg:max-w-xl mb-8 mt-8'
                 src={props.imgSrc}
                 alt={props.imgAlt}/>
            <h1 className='font-extrabold lg:font-black mt-8 text-2xl mb-4'>{props.cardTitle}</h1>
            <p className='lg:text-lg'>{props.blurb}</p>
            <ul className='mt-8 grid'>
                <li className='list-grid'>
                    <p className='font-semibold'>Role</p>
                    <p>{props.role}</p>
                </li>
                <li className='list-grid'>
                    <p className='font-semibold'>Dates</p>
                    <p>{props.dates}</p>
                </li>
                <li className='list-grid'>
                    <p className='font-semibold'>Technologies</p>
                    <p>{props.technologies}</p>
                </li>
            </ul>
            <div className='flex justify-center'>
                <button className='flex'>
                    <span>Learn More</span>
                    <svg className='ml-2' fill="none" height="24" stroke="#000" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2"
                         viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <polyline points="14 6 20 12 14 18"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default LearnMore;
