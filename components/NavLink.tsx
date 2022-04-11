import {useRouter} from 'next/router';

interface Props {
    title: string;
    link: string;
}

const NavLink = ({ title, link}: Props): JSX.Element => {
    const router = useRouter();

    return (
        <a
            href={link}
            className={`
                text-center
                py-2
                px-3
                ease-out
                duration-300
                hover:bg-zinc-800
                ${router.asPath === `${link}`
                ? 'underline'
                : ' hover:no-underline'}
            `}
        >
            {title}
        </a>
    )
}

export default NavLink;