import React from 'react';
import './cvs-styles.scss';

const Cvs = () => {
    return (
        <div className='w-full md:max-w-2xl lg:max-w-2xl'>
            <div className='w-full flex bg-cvs'>
                <h1 className='head-container md:ml-16 md:text-7xl'>CVS</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>I have been a full-stack engineer at CVS for over 2 years and have grown
                    significantly during that
                    time. I have enjoyed being able to participate and contribute at every stage of the product
                    lifecycle from initial planning all the way to delivering MVP.</p>
                <h1 className='font-semibold mt-4'>Non-technical Responsibilities and Scope</h1>
                <h2 className='font-semibold ml-4 mt-4'>Product Lifecycle</h2>
                <p className='ml-4'>I have enjoyed a large degree of inclusion to every stage of the product lifecycle.
                    I have been able
                    to participate in the initial stages of new products and have been able to provide engineering
                    insight and suggestions during Discovery and Framing sessions, Inceptions, and Design Studios. I
                    have been able to directly interact with and to form professional relationships with our business
                    partners. </p>
                <h2 className='font-semibold ml-4 mt-4'>Conduct Interviews and Provide Mentorship</h2>
                <p className='ml-4'>I have welcomed many new engineers and teammates and have taken on the role of a
                    mentor in order to bring them up to speed in respect to code bases, practices, and XP rituals.
                    Additionally, I have taken the responsibility of an interviewer and have evaluated prospective
                    engineers and designers.</p>
            </div>
        </div>
    );
}

export default Cvs;
