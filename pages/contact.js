import Header from '../components/Header';
import SocialMediaImg from '../components/SocialMediaImg';

// Images
import githubImage from '../public/images/github.png';
import instaImage from '../public/images/instagram.png';
import linkedinImage from '../public/images/linkedin.png';

const Contact = () => {
    return (
        <>
            <Header title="Contact" />
            <p className="
                text-center
                mb-10
                text-sm
            ">
                Feel free to contact me if you have any inquiries.
            </p>
            <div className="
                grid
                grid-cols-3
                justify-items-center
            ">
                <SocialMediaImg 
                    src={githubImage} 
                    height={100} 
                    width={100}
                    href="https://github.com/omfj"
                    alt="Github logo with link to my github."
                />
                <SocialMediaImg 
                    src={instaImage} 
                    height={100} 
                    width={100} 
                    href="https://instagram.com/lordolem"
                    alt="Instagram logo with link to my instagram"
                />
                <SocialMediaImg 
                    src={linkedinImage}
                    height={100} 
                    width={100}
                    href="https://linkedin/in/omfj"
                    alt="Linkedin logo with link to my linkedin"
                />
            </div>
        </>
    )
}

export default Contact;