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
            border-slate-800
            mb-8
            p-5
            m-auto
            w-[95%]
            sm:w-[100%]
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
            <hr className="hidden" />
        </div>
    )
}

export default ProjectBox;