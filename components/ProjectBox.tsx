import LinkButton from './LinkButton';

interface Props {
    title: string;
    desc: string;
    link: string;
    twitter?: string;
}

const ProjectBox = ({ title, desc, link, twitter }: Props): JSX.Element => {
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
            {twitter && (
                <p className="text-md mb-8 text-[#0a84ff] underline">
                    <a href={twitter}>This is the twitter.</a>
                </p>
            )}
            <LinkButton link={link} />
        </div>
    )
}

export default ProjectBox;