import Header from '../components/Header';
import ProjectBox from '../components/ProjectBox';
import SEO from '../components/SEO';

const Projects = (): JSX.Element => {
    return (
        <>
            <SEO title="Projects" />
            <Header title="Projects" />
            <ProjectBox 
                title="This website!" 
                desc="The code is on Github. Feedback is appreciated."
                link="https://www.github.com/omfj/next-omfj.no"
            />
            <ProjectBox 
                title="Kurvmatte" 
                desc="A math game I made for my computer class in high school."
                link="https://www.kurvmatte.omfj.no"
            />
            <ProjectBox 
                title="Miele Logic CLI" 
                desc="I command line interface for checking the progress of my miele washer/dyer."
                link="https://www.github.com/omfj/miele-cli"
            />
            <ProjectBox 
                title="@TrondheimVaeret on Twitter" 
                desc="A dumb script made with python to automatically tweet the temperature in my hometown."
                twitter="https://www.twitter.com/trondheimvaeret"
                link="https://www.github.com/omfj/trondheimvaeret"
            />
            <p className="
                text-center
                sm:mb-[100px]
            ">
                For more check out my <a className="text-[#0a84ff] underline" href="https://github.com/omfj">Github</a>!
            </p>
        </>
    )
}

export default Projects;
