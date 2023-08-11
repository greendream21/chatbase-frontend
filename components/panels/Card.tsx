type CardProps = {
    className: string,
    onToggle: () => void,
    title: string,
    description?: string,
};

const Card = ({ className, onToggle, title, description }: CardProps) => {
    return (
        <div className={`card ${className}`} onClick={onToggle}>
            <h5>
                {title}
            </h5>
            {description && (
                <p>{description}</p>
            )}
        </div>
    )
}

export default Card;
