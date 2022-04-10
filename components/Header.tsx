import Nav from './Nav';

interface Props {
  title: string;
}

const Header = ({ title }: Props): JSX.Element => {
    return (
        <div className="py-10">
            <h1 className="
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