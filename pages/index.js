import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header title="Ole Magnus" />
            <p className="
                italic
                text-center
                mb-3
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