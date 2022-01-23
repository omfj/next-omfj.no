const Layout = ({ children }) => {
    return (
        <div className="
            h-screen
            w-screen
            bg-[#010510]
        ">
            <main className="
                font-JetBrains 
                my-20 
                w-[500px] 
                absolute 
                left-1/2 
                -translate-x-1/2
            ">
                {children}
            </main>
        </div>
    )
}

export default Layout;