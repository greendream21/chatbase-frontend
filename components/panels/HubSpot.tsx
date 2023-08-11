import Title from "./Title";

const Hubspot = () => {
    return (
        <div
            id="home"
            aria-labelledby="home-tab"
        >
            <Title
                title="Connected ConnectWise Accounts"
                btnText="Connect Account"
            />

            <div className="sectting-contain">
                <p>Connect an account to start getting the most out of
                    ChatSpot. Don&apos;t have a ConnectWise account?{" "}
                    <a href="#" className="sign-up">Sign Up.</a>
                </p>
            </div>
        </div>
    )
}

export default Hubspot;
