import Image from "next/image";

interface Props {
    source: any;
    height: number;
    width: number;
    href: string;
    alt: string;
}

const SocialMediaImg = ({ source, height, width, href, alt }: Props): JSX.Element => {
    return (
        <a
            target="_blank"
            href={href}
            className="hover:scale-110 ease-out duration-300"
        >
            <Image
                height={height}
                width={width}
                src={source}
                alt={alt}
            />
        </a>
    )
}

export default SocialMediaImg;