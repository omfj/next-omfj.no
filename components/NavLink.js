const NavLink = ({ title, href}) => {
    title = title.toUpperCase();
    return (
        <a 
            href={href}
            className="
                text-center
                mx-5
                rounded-xl
                p-2
                hover:bg-[#4e4e4e]
            "
        >
            {title}
        </a>
    )
}

export default NavLink;