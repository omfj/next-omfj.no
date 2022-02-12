import LinkButton from './LinkButton';

interface Props {
    title: String;
    desc: String;
    href: String;
}

const ProjectBox = ({ title, desc, href }: Props): JSX.Element => {
    return (
        <div className="
            border-l-4 
            border-[#0a84ff]
            mb-8
            p-5
            last:mb-8
        ">
            <p className="text-lg underline mb-3">
                {title}
            </p>
            <p className="text-md mb-8">
                {desc}
            </p>
            <LinkButton href={href} />
        </div>
    )
}

export default ProjectBox;