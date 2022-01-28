const LinkButton = ({ href }) => {
    return (
        <a className="
            text-center
            py-2
            px-3
            text-sm
            rounded-xl
            bg-[#4e4e4e]
            hover:bg-[#0a84ff]
            ease-out
            duration-300
        " href={href}>
            Take a look!
        </a>
    )
}

export default LinkButton;