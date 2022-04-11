import NavLink from './NavLink';
import Hidden from './Hidden';

const Nav = (): JSX.Element => {
    return (
        <div className="
            bg-zinc-900
        ">

            <Hidden type="div" />

            <div className="
                max-w-[350px]
                flex
                flex-wrap
                text-lg
                justify-evenly
                mt-10
                mb-3
                mx-auto
            ">
                <NavLink title="home" link="/" />
                <Hidden type="sep" />
                <NavLink title="projects" link="/projects/" />
                <Hidden type="sep" />
                <NavLink title="git" link="https://git.omfj.no/" />
                <Hidden type="sep" />
                <NavLink title="contact" link="/contact/" />
            </div>

            <Hidden type="div" />
        </div>
    )
}

export default Nav;