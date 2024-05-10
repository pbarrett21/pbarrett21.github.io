import React, { useContext } from 'react'
import './cvs-styles.scss'
import ThemeContext from '../theme-context'

const Cvs = () => {
    const theme = useContext(ThemeContext).theme

    return (
        <div
            className={
                theme === 'dark'
                    ? 'text-white w-full md:max-w-2xl lg:max-w-2xl'
                    : 'w-full md:max-w-2xl lg:max-w-2xl'
            }
        >
            <div className='w-full flex cvs-banner'>
                <h1 className='head-container md:ml-16 md:text-7xl'>CVS</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>
                    I have been a full-stack engineer at CVS for 5 years and
                    have grown significantly during that time. I have enjoyed
                    being able to participate and contribute at every stage of
                    the product lifecycle from initial planning all the way to
                    delivering MVP. I play a pivotal role in driving my team's
                    success - I have led as anchor engineer on several teams,
                    driven integrations with other products or tools, become a
                    subject matter expert with respect to multiple tools,
                    services or technologies, and have successfully solved
                    mission-critical bugs in production and more!
                </p>

                <h1 className='font-semibold mt-10'>
                    Technical Responsibilities and Information
                </h1>
                <h2 className='font-semibold ml-4 mt-4'>
                    Technologies and Tools Used
                </h2>
                <p className='ml-4'>
                    React, Angular, Typescript, SQL databases, Docker,
                    Dynatrace, Cypress, Jasmine, GitLab, Flyway, Lombok,
                    Hibernate, Spring Cloud Data Flow, Pivotal Cloud Foundry,
                    Jenkins, Spring JPA
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Notable Libraries/Frameworks Used
                </h2>
                <p className='ml-4'>
                    Spectator, NgRx, RxJS, AgGrid, JUnit, Mockito
                </p>
                <h2 className='font-semibold ml-4 mt-4'>Agile</h2>
                <p className='ml-4'>
                    I have been a part of an agile team since working at CVS.
                    Some of the core concepts that I have been exposed to
                    include TDD (test driven development), Continuous
                    Integration/Continuous Deployment, paired programming and
                    much more.
                </p>

                <h1 className='font-semibold mt-10'>
                    Accomplishments and Other Roles
                </h1>
                <h2 className='font-semibold ml-4 mt-4'>Anchor Engineer</h2>
                <p className='ml-4'>
                    I have had the privilege to serve as 'anchor' engineer on
                    several products at CVS. The anchor engineer is a concept
                    within XP flavor of Agile and operates similarly to a
                    Technical Lead, with some key differences.
                    <a
                        className='underline hover:text-green-600 ml-1 mr-1'
                        href='https://enfuse.io/what-does-it-mean-to-be-an-anchor/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        This website
                    </a>
                    describes the role of an anchor engineer very well: "...an
                    anchor bridges the gap between product/business and the
                    technical team by being an excellent ambassador. They help
                    arbitrate and make team decisions, act as a funnel for
                    incoming requests and they mentor team members to become
                    anchors. They are technically excellent and socially adept."
                    Some of the key responsibilities of an achor include:
                    mentorship, product planning, facilitating story/ticket
                    creation, discussion of implementation options with fellow
                    engineers, roadmapping with business partners, protecting
                    the team from unreasonable timelines/interruptions/etc,
                    addressing blockers, and coding.
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Diagnose and remove memory leak slowing test execution times
                </h2>
                <p className='ml-4'>
                    On a project with over 1500 front-end tests, I was able to
                    find and successfully fix a memory leak improving test run
                    time from 22 minutes to 3 - an{' '}
                    <b>86% total reduction in test run time.</b>
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Led Integration Efforts
                </h2>
                <p className='ml-4'>
                    I have led various integration efforts. One recent notable
                    instance was transitioning our monitoring and healthcheck
                    software from Dynatrace to AppDynamics. This effort involved
                    cataloging must-have features, organizing meetings with SMEs
                    and other technical teams, creating technical roadmaps to
                    prevent loss of monitoring, translating existing monitoring
                    scripts from JSON to Selenium, configuring dashboards for
                    business use, and more.
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Accessibility Champion
                </h2>
                <p className='ml-4'>
                    I have championed the effort to bring greater accessibility
                    standards to all products in our lab. This has included
                    sharing knowledge how to make apps more accessible,
                    integrating better accessibility standards into story
                    creation / general workflow, showcasing empathy building
                    exercises, following
                    <a
                        className='underline hover:text-green-600 ml-1 mr-1'
                        href='https://www.w3.org/TR/WCAG21/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        W3 WCAG
                    </a>
                    standards and more.
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Upgrade security to Auth Code Flow
                </h2>
                <p className='ml-4'>
                    I took the initiative to upgrade the security for our
                    application from Implicit to
                    <a
                        className='underline hover:text-green-600 ml-1'
                        href='https://auth0.com/docs/flows/authorization-code-flow'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Auth Code Flow
                    </a>
                    . Implementing this change involved work spanning from
                    configuration on the front end to the back end as well as
                    SSO setup and more. This was another great learning
                    experience!
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Contribute to Proprietary Component Library
                </h2>
                <p className='ml-4'>
                    I have enjoyed being able to contribute many new features
                    and bugfixes on the CVS component library. I have learned a
                    lot about libraries, versioning, and more from this
                    experience!
                </p>
                <h2 className='font-semibold ml-4 mt-4'>Give Presentations</h2>
                <p className='ml-4'>
                    I have given presentations in order to share knowledge with
                    other engineers on various topics including
                    <a
                        className='underline hover:text-green-600 ml-1 mr-1'
                        href='https://github.com/ngneat/spectator'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Spectator
                    </a>
                    and
                    <a
                        className='underline hover:text-green-600 ml-1'
                        href='https://www.ag-grid.com/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        AgGrid
                    </a>
                    !
                </p>

                <h1 className='font-semibold mt-10'>
                    Non-technical Responsibilities and Scope
                </h1>
                <h2 className='font-semibold ml-4 mt-4'>Product Lifecycle</h2>
                <p className='ml-4'>
                    I have enjoyed a large degree of inclusion to every stage of
                    the product lifecycle. I have been able to participate in
                    the initial stages of new products and have been able to
                    provide engineering insight and suggestions during Discovery
                    and Framing sessions, Inceptions, and Design Studios. I have
                    been able to directly interact with and to form professional
                    relationships with our business partners.{' '}
                </p>
                <h2 className='font-semibold ml-4 mt-4'>
                    Conduct Interviews and Provide Mentorship
                </h2>
                <p className='ml-4'>
                    I have welcomed many new engineers and teammates and have
                    taken on the role of a mentor in order to bring them up to
                    speed in respect to code bases, practices, and our Agile
                    rituals. Additionally, I have taken the responsibility of an
                    interviewer and have evaluated prospective engineers and
                    designers.
                </p>
            </div>
        </div>
    )
}

export default Cvs
