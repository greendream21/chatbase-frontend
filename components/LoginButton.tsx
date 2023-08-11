import Link from "next/link";

type LoginButtonProps = {
    className?: string
};

const LoginButton = ({ className }: LoginButtonProps) => {
    return (
        <div className={className ? className : 'Login-btn'}>
            <Link href="/login">Login</Link>
        </div>
    );
};

export default LoginButton;