import Header from '../components/Header';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO title="OMFJ - Home" />
            <Header title="Ole Magnus" />
            <p className="
                font-bold
                text-center
                mb-3
                underline
                text-lg
            ">
                Hello World!
            </p>
            <p className="
                text-center
            ">
                I am a student from Norway, studying cybersecurity at the University of Bergen.
            </p>
        </>
    )
}

export default Home;