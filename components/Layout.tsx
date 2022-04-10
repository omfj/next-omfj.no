interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <main className="
            max-w-[700px]
            mx-auto
            my-[5rem]
        ">
            {children}
        </main>
    )
}

export default Layout;