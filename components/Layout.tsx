interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout;