const LinkButton = ({ href }) => {
    return (
        <a 
            href={href}
            className="
                text-center
                py-2
                px-3
                mx-5
                text-sm
                rounded-xl
                bg-[#4e4e4e]
                hover:bg-[#7e7e7e]
                ease-out
                duration-300
            "
        >
            Take a look!
        </a>
    )
}

export default LinkButton;