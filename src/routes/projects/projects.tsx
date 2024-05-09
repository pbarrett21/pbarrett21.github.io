import React, { useContext } from 'react'
import ThemeContext from '../../theme-context'
import ProjectCard from '../../project-card/project-card'

const Projects = () => {
    const theme = useContext(ThemeContext).theme

    return (
        <div
            className={
                theme === 'dark'
                    ? 'text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4'
                    : 'max-w-full md:max-w-2xl lg:max-w-2xl m-4'
            }
        >
            <ProjectCard
                cardTitle={'Aesthetic'}
                imgSrc={require('./../../resources/aestheticgif.gif').default}
                imgAlt={'Aesthetic website screenshot'}
                blurb={
                    'An experiment in responsive design and animation inspired by e-commerce website templates from Dribbble'
                }
                technologies={['React', 'Typescript', 'Vite', 'GSAP']}
                learnMorePath={'/aesthetic'}
            />
            <ProjectCard
                cardTitle={'2048Clone'}
                imgSrc={require('./../../resources/2048clone.jpg').default}
                imgAlt={'2048 clone screenshot'}
                blurb={
                    'Single-player sliding tile puzzle video game with the goal of reaching a tile of 2048.'
                }
                technologies={['Angular', 'Typescript', 'SCSS', 'HTML']}
                learnMorePath={'/2048clone'}
            />
            <ProjectCard
                cardTitle={'LouTrails'}
                imgSrc={require('./../../resources/loutrails.jpg').default}
                imgAlt={'LouTrails'}
                blurb={
                    'An informational website showcasing trails in the Louisville area.'
                }
                technologies={[
                    'React',
                    'Styled Components',
                    'Mapbox GL JS',
                    'Gatsby',
                ]}
                learnMorePath={'/loutrails'}
            />
            <ProjectCard
                cardTitle={'Portfolio Website'}
                imgSrc={require('./../../resources/websitejpg.jpeg').default}
                imgAlt={'Website'}
                blurb={
                    'Creating this website has been an enjoyable opportunity to try my hand at ' +
                    'responsive design and CSS animation as well as to explore new technologies and tools.'
                }
                technologies={['React', 'Tailwind CSS', 'Responsive Design']}
                learnMorePath={'/website'}
            />
            <h1 className='mt-16 text-lg lg:text-2xl font-semibold flex justify-center'>
                More to come, soon...
            </h1>
        </div>
    )
}

export default Projects
