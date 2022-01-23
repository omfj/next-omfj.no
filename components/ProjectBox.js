import LinkButton from './LinkButton';

const ProjectBox = ({ title, desc, href }) => {
    return (
        <div className="
            w-500px
            border-l-4 
            border-[#e6292b]
            mb-8
            py-3
            last:mb-0
            text-white
        ">
            <p className="text-xl underline px-5 mb-3">
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