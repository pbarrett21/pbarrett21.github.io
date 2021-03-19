import React from 'react';

const Home = () => {
    return (
        <div className='m-4 '>
            <img className='rounded shadow-md'
                 src={require('./../../resources/cup-of-coffee.jpeg').default}
                 alt='macbook and coffee'/>
            <div className='max-w-prose'>
                <h1 className='text-xl font-semibold mt-6 mb-6'>Hey there, I'm Paul 👋</h1>
                <h1 className='text-lg font-normal'>I am a software developer dedicated to
                    constant improvement and exploration</h1>
            </div>
        </div>
    );
}

export default Home;
