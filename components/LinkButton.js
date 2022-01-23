const LinkButton = ({ href }) => {
    return (
        <div className="
            bg-[#4e4e4e]
            inline
            p-2
            rounded-xl
            mx-5
        ">
            <a href={href}>Take a look!</a>
        </div>
    )
}

export default LinkButton;