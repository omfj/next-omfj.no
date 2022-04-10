interface Props {
    type: string;
}

const Hidden = ({type}: Props): JSX.Element => {
    if (type === "sep") {
        return (
            <span className="hidden"> - </span>
        )
    } else {
        return (
            <hr className="hidden"></hr>
        )
    }
}

export default Hidden;