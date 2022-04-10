import NavLink from './NavLink';
import Hidden from './Hidden';

const Nav = (): JSX.Element => {
    return (
        <div className="
            flex
            flex-wrap
            bg-slate-800
            my-5
        ">
            <hr />

            <NavLink title="home" link="/" />
            <Hidden />
            <NavLink title="projects" link="/projects/" />
            <Hidden />
            <NavLink title="git" link="https://git.omfj.no/" />
            <Hidden />
            <NavLink title="contact" link="/contact/" />

            <hr />
        </div>
    )
}

export default Nav;