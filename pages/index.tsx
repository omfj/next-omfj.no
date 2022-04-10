import Header from '../components/Header';
import SEO from '../components/SEO';
import Image from 'next/image';

import * as Profilepic from '../public/images/profilepic.png';

const Home = (): JSX.Element => {
    return (
        <>
            <SEO title="Home" />
            <Header title="ole magnus" />

            <div className="max-w-[300px] m-auto my-10">
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
            </div>
        </>
    )
}

export default Home;