const NavLink = ({ title, href}) => {
    title = title.toUpperCase();
    return (
        <a className="
            text-center
            py-2
            px-3
            m-auto
            sm:text-lg
            rounded-xl
            hover:bg-[#c6e1ff]
            hover:text-black
            hover:scale-110
            ease-out
            duration-300
        " href={href}>
            {title}
        </a>
    )
}

export default NavLink;