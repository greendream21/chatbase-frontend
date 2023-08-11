type TitleProps = {
    title: string,
    btnText?: string,
}

const Title = ({ title, btnText }: TitleProps) => {
    return (
        <div className="setting-tittle">
            <h4>{title}</h4>
            {btnText && (
                <div className="Login-btn">
                    <a href="#">{btnText}</a>
                </div>
            )}
        </div>
    )
}

export default Title;
