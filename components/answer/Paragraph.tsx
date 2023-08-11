type ParagraphProps = {
    data: string
};

const Paragraph = ({ data }: ParagraphProps) => {
    return (
        <div className="msg-header">
            <p>{data}</p>
        </div>
    );
};

export default Paragraph;