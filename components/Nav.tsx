import NavLink from './NavLink';

const Nav = (): JSX.Element => {
    return (
        <ul className="
            flex
            flex-wrap
            bg-slate-800
            my-5
        ">
            <NavLink title="home" link="/" />
            <NavLink title="projects" link="/projects/" />
            <NavLink title="git" link="https://git.omfj.no/" />
            <NavLink title="contact" link="/contact/" />
        </ul>
    )
}

export default Nav;