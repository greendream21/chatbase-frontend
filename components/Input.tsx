type InputProps = {
    element?: string,
    name: string,
    label: string,
    value: string,
    onChange: (e: any) => void,
}

const Input = ({
    element,
    name,
    label,
    value,
    onChange,
    ...rest
}: InputProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {element && element === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            )}
        </div>
    )
}

export default Input;
