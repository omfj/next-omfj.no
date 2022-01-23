import Nav from './Nav';

const Header = ({ title }) => {
    return (
        <div>
            <h1 className="
              text-white
              text-3xl
              font-bold
              text-center
            ">
              {title}
            </h1>
            <Nav />
        </div>
    )
}

export default Header;