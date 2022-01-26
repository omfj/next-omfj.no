const Layout = ({ children }) => {
    return (
        <main className="
            font-JetBrains 
            max-w-[500px]
            w-[90%]
            absolute
            top-[10%]
            left-1/2 
            -translate-x-1/2
        ">
            {children}
        </main>
    )
}

export default Layout;