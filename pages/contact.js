import Header from '../components/Header';
import Image from 'next/image';

// Images
import githubImage from '../public/images/github.png';
import instaImage from '../public/images/instagram.png';
import linkedinImage from '../public/images/linkedin.png';

const Contact = () => {
    return (
        <div>
            <Header title="Contact" />
            <p className="
                text-center
                mb-4
            ">
                Feel free to contact me if you have any inquiries.
            </p>
            <div className="
                grid
                grid-cols-3
                content-center
                justify-items-center
            ">
                <Image 
                    src={githubImage} 
                    height={100} 
                    width={100}
                />
                <Image 
                    src={instaImage} 
                    height={100} 
                    width={100} 
                />
                <Image 
                    src={linkedinImage}
                    height={100} 
                    width={100} 
                />
            </div>
        </div>
    )
}

export default Contact;