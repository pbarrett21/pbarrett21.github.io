import React from 'react';
import ExperienceCard from '../../experience-card/experienceCard';

const Experience = () => {
    return (
        <div className='max-w-full md:max-w-2xl lg:max-w-2xl m-4'>
            <ExperienceCard cardTitle={'CVS Health'}
                            imgSrc={require('./../../resources/cvs-health-logo-stacked.png').default}
                            imgAlt={'CVS Health Logo'}
                            blurb={'I joined CVS Health in 2019 as a full stack engineer working on renovating ' +
                            'workflows for PBM by creating modern single page applications.'}
                            role={'Software Engineer'}
                            dates={'June 2019 - Present'}
                            learnMorePath={'/cvs'}
                            technologies={'Angular, SpringBoot, Typescript, NGRX, AG Grid'}/>
            <ExperienceCard cardTitle={'University of Kentucky'}
                            imgSrc={require('./../../resources/uk-logo.jpeg').default}
                            imgAlt={'University of Kentucky Logo'}
                            blurb={'I graduated from the University of Kentucky in 2019 with a major in computer science ' +
                            'and a minor in mathematics. During my time as a student I was able to work on many interesting ' +
                            'projects and attend the CatHacks hackathon.'}
                            role={'Student'}
                            dates={'May 2016 - May 2019'}
                            learnMorePath={'/uk'}
                            technologies={'Angular, Java, C++, Machine Learning, Javascript'}/>
        </div>
    );
}

export default Experience;
