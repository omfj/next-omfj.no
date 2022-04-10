interface Props {
    title: string;
    link: string;
}

const NavLink = ({ title, link}: Props): JSX.Element => {
    return (
        <a href={link}>
            <li className="
                text-center
                text-lg
                py-2
                px-3
                ease-out
                duration-300
                hover:bg-slate-700
            ">
                {title}
            </li>
        </a>
    )
}

export default NavLink;