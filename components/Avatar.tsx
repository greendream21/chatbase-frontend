type AvatarProps = { name: string };

const Avatar = ({ name }: AvatarProps) => {
    return (
        <div className="msg-avatar">
            <span>{name}</span>
        </div>
    );
};

export default Avatar;