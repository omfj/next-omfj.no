import Header from '../components/Header';
import SEO from '../components/SEO';
import Image from 'next/image';
import profilepic from '../public/images/profilepic.png';

const Home = () => {
    return (
        <>
            <SEO title="OMFJ - Home" />
            <Header title="Ole Magnus" />
            <div className="
                flex
                justify-center
                mb-5
            ">
                <Image 
                    src={profilepic}
                    width={125}
                    height={125}
                    className="
                        rounded-full
                    "
                />
            </div>
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