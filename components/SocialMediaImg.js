import Image from "next/image";

const SocialMediaImg = ({ src, height, width, href, alt }) => {
    return (
        <a target="_blank" href={href} target-blank className="hover:scale-125 ease-out duration-300">
            <Image
                height={height}
                width={width}
                src={src}
                alt={alt}
            />
        </a>
    )
}

export default SocialMediaImg;