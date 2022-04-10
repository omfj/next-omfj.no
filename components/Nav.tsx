import NavLink from './NavLink';

const Nav = (): JSX.Element => {
    return (
        <nav className="
            flex
            bg-slate-800
            my-5
        ">
            <NavLink title="home" link="/" />
            <NavLink title="projects" link="/projects/" />
            <NavLink title="contact" link="/contact/" />
            <NavLink title="git" link="https://git.omfj.no/" />
        </nav>
    )
}

export default Nav;