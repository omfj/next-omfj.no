import NavLink from '../components/NavLink';

const Nav = () => {
    return (
        <nav className="grid grid-cols-3 my-10 items-center">
            <NavLink title="Home" href="/" />
            <NavLink title="Projects" href="/projects" />
            <NavLink title="Contact" href="/contact" />
        </nav>
    )
}

export default Nav;