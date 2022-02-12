import NavLink from './NavLink';

const Nav = (): JSX.Element => {
    return (
        <nav className="grid grid-cols-3 my-10 items-center">
            <NavLink title="Home" link="/" />
            <NavLink title="Projects" link="/projects" />
            <NavLink title="Contact" link="/contact" />
        </nav>
    )
}

export default Nav;