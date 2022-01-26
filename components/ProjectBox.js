import LinkButton from './LinkButton';

const ProjectBox = ({ title, desc, href }) => {
    return (
        <div className="
            border-l-4 
            border-[#e6292b]
            mb-8
            py-3
            last:mb-8
        ">
            <p className="text-lg underline px-5 mb-3">
                {title}
            </p>
            <p className="text-md px-5 mb-8">
                {desc}
            </p>
            <LinkButton href={href} />
        </div>
    )
}

export default ProjectBox;