interface Props {
    link: string;
}

const LinkButton = ({ link }: Props): JSX.Element => {
    return (
        <a className="
            text-center
            py-2
            px-3
            text-sm
            rounded-xl
            bg-zinc-800
            hover:bg-zinc-900
            ease-out
            duration-300
        " href={link}>
            Take a look!
        </a>
    )
}

export default LinkButton;
