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

                <h1 className='font-semibold mt-10'>Technical Responsibilities and Information</h1>
                <h2 className='font-semibold ml-4 mt-4'>Technologies Used</h2>
                <p className='ml-4'>Angular, SpringBoot, Oracle SQL databases, Typescript, add more here</p>
                <h2 className='font-semibold ml-4 mt-4'>Notable Libraries Used</h2>
                <p className='ml-4'>Spectator, NGRX, AgGrid, add more here</p>
                <h2 className='font-semibold ml-4 mt-4'>XP (Extreme Programming)</h2>
                <p className='ml-4'>I have been a part of an XP team since working at CVS. XP is a software development
                    methodology similar to many other Agile methodologies. Some of the core concepts that I have been
                    exposed to include TDD (test driven development), Continuous Integration, and paired
                    programming. Learn more about XP
                    <a className='underline hover:text-green-600 ml-1'
                       href='https://en.wikipedia.org/wiki/Extreme_programming'
                       rel='noreferrer'
                       target='_blank'>here.</a>
                </p>

                <h1 className='font-semibold mt-10'>Accomplishments and Other Roles</h1>
                <h2 className='font-semibold ml-4 mt-4'>Contribute to Proprietary Angular Component Library</h2>
                <p className='ml-4'>I have enjoyed being able to contribute many new features, fix bugs, and
                    troubleshoot on the CVS ACL. I have learned a lot about libraries, versioning, and more from this
                    experience!</p>
                <h2 className='font-semibold ml-4 mt-4'>Accessibility Champion</h2>
                <p className='ml-4'>I have championed the effort to bring greater accessibility standards to all
                    products in our lab. This has included sharing knowledge how to make apps more accessible,
                    integrating better accessibility standards into story creation / general workflow, showcasing
                    empathy building exercises, following
                    <a className='underline hover:text-green-600 ml-1 mr-1'
                       href='https://www.w3.org/TR/WCAG21/'
                       rel='noreferrer'
                       target='_blank'>W3 WCAG</a>
                    standards and more.</p>
                <h2 className='font-semibold ml-4 mt-4'>Upgrade security to Auth Code Flow</h2>
                <p className='ml-4'>I took the initiative to upgrade the security for our application from Implicit to
                    <a className='underline hover:text-green-600 ml-1 mr-1'
                       href='https://auth0.com/docs/flows/authorization-code-flow'
                       rel='noreferrer'
                       target='_blank'>Auth Code Flow.</a>
                    Implementing this change involved work spanning from configuration on the front end
                    to the back end as well as SSO setup and more. </p>
                <h2 className='font-semibold ml-4 mt-4'>Give Presentations</h2>
                <p className='ml-4'>Spectator, SOLID, KT, LNL, AgGrid</p>

                <h1 className='font-semibold mt-10'>Non-technical Responsibilities and Scope</h1>
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
