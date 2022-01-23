import Header from '../components/Header';
import ProjectBox from '../components/ProjectBox';

const Projects = () => {
    return (
        <div>
            <Header title="Projects" />
            <div>
                <ProjectBox 
                    title="This website!" 
                    desc="The code is on Github. Feedback is appreciated."
                    href="https://www.github.com/omfj/omfj.no"
                />
                <ProjectBox 
                    title="Kurvmatte" 
                    desc="A math game I made for my computer class in high school."
                    href="https://www.it1.omfj.no"
                />
                <ProjectBox 
                    title="Miele Logic CLI" 
                    desc="I command line interface for checking the progress of my miele washer/dyer."
                    href="https://www.github.com/omfj/miele-cli"
                />
                <ProjectBox 
                    title="@TrondheimVaeret på twitter" 
                    desc="A dumb script made with python to automatically tweet the temperature in my hometown."
                    href="https://www.twitter.com/trondheimvaeret"
                />
            </div>
        </div>
    )
}

export default Projects;