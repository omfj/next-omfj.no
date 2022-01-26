import Nav from './Nav';

const Header = ({ title }) => {
    return (
        <>
            <h1 className="
              text-3xl
              font-bold
              text-center
            ">
              {title}
            </h1>
            <Nav />
        </>
    )
}

export default Header;