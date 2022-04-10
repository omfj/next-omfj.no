interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <main className="
            max-w-[640px]
            mx-auto
            min-mx-5
            my-[5rem]
        ">
            {children}
        </main>
    )
}

export default Layout;