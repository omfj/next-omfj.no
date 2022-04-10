import Header from '../components/Header';
import SocialMediaImg from '../components/SocialMediaImg';
import SEO from '../components/SEO';

// Images
import * as GithubImage from '../public/images/github.png';
// import * as InstaImage from '../public/images/instagram.png';
import * as LinkedinImage from '../public/images/linkedin.png';

const Contact = (): JSX.Element => {
    return (
        <>
            <SEO title="contact" />
            <Header title="contact" />
            <p className="
                text-center
                mb-10
                text-sm
            ">
                Feel free to contact me if you have any inquiries.
            </p>
            <div className="
                max-w-[400px]
                m-auto
                grid
                grid-cols-2
                justify-items-center
            ">
                <SocialMediaImg
                    source={GithubImage}
                    height={100}
                    width={100}
                    href="https://github.com/omfj"
                    alt="Github logo with link to my github."
                />
                {/* <SocialMediaImg
                    source={InstaImage}
                    height={100}
                    width={100}
                    href="https://instagram.com/lordolem"
                    alt="Instagram logo with link to my instagram"
                /> */}
                <SocialMediaImg
                    source={LinkedinImage}
                    height={100}
                    width={100}
                    href="https://linkedin.com/in/omfj"
                    alt="Linkedin logo with link to my linkedin"
                />
            </div>
        </>
    )
}

export default Contact;
