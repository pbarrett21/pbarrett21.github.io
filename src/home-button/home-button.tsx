import React from 'react';

const HomeButton = () => {

    return (
        <button className='border-0 bg-transparent'>
            <img className='w-8'
                src={require('./../resources/logo192.png').default}
                alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
