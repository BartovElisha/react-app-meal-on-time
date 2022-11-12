interface Props {
    content: string;
}

function Title({content}: Props) {
    return (
        <h2 className="text-center mt-4">
            {content}
        </h2>
     );
}

export default Title;