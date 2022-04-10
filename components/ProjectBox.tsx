import LinkButton from './LinkButton';
import Hidden from './Hidden';

interface Props {
    title: string;
    desc: string;
    link: string;
    twitter?: string;
}

const ProjectBox = ({ title, desc, link, twitter }: Props): JSX.Element => {
    return (
        <div className="
            mb-10
            m-auto
            max-w-[600px]
        ">
            <div className="
                mx-2
                border-l-4
                px-5
                border-zinc-900
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
                <Hidden type="div" />
            </div>
        </div>
    )
}

export default ProjectBox;