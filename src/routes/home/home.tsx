import React from 'react';

const Home = () => {
    return (
        <div className='m-4 max-w-prose'>
            <img className='rounded shadow-md'
                 src={require('./../../resources/cup-of-coffee.jpeg').default}
                 alt='landing page'/>
            <h1 className='font-semibold mt-6'>Hey there! 👋 </h1>
            <h1 className='font-semibold'>I'm Paul - a software engineer dedicated to constant learning and exploration!</h1>
        </div>
    );
}

export default Home;
