import Image from "next/image";
import GoogleDocIcon from "@/assets/imges/google-docs.229b4e3e.svg";
import TwitterIcon from "@/assets/imges/twitter.cd2ef85c.svg";
import Title from "./Title";

const Accounts = () => {
    return (
        <div
            id="profile"
            aria-labelledby="profile-tab"
        >
            <Title title="Connect Accounts" />

            <div className="sectting-contain">
                <div className="account-listing">
                    <div className="account-box">
                        <div className="img-box">
                            <Image src={GoogleDocIcon} alt="google docs" title="google docs" />
                        </div>
                        <div className="account-dis">
                            <h3>Google Docs</h3>
                            <p>Your Google Docs account is connected.</p>
                            <p>
                                <em>
                                    Note: ChatSpot only
                                    has access to Docs it creates (e.g.,
                                    Sheets
                                    and Slides) – it cannot read any other
                                    Google Docs in your account.
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="account-box">
                        <div className="img-box" id="Twitter">
                            <Image src={TwitterIcon} alt="twitter" title="twitter" />
                        </div>
                        <div className="account-dis">
                            <h3>Twitter</h3>
                            <div className="Login-btn">
                                <a href="#">Connect Twitter</a>
                            </div>
                            <p>
                                <em>
                                    Note: ChatSpot has a feature to help you
                                    write and post tweets to your account.
                                    It
                                    will never tweet without your
                                    permission.
                                </em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts;
