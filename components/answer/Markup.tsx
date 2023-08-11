type MarkupProps = {
    data: string,
};

const Markup = ({ data }: MarkupProps) => {
    return (
        <div className="msg-header">
            <pre className='code code-html'>
                <div className="bg-black">
                    <div className="code-header">
                        <span>Html</span>
                        <div className="right">
                            <a href="#">Copy code</a>
                        </div>
                    </div>
                    <div className="code-main-box">
                        <code
                            className="!whitespace-pre hljs language-html"
                            dangerouslySetInnerHTML={{ __html: data }}
                        >
                        </code>
                    </div>
                </div>
            </pre>
        </div>
    );
};

export default Markup;