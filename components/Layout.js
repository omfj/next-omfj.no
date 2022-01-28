const Layout = ({ children }) => {
    return (
        <main className="
            max-w-[500px]
            w-[90%]
            mx-auto
            my-[5rem]
        ">
            {children}
        </main>
    )
}

export default Layout;