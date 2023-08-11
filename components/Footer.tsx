import HeartIcon from "@/assets/imges/heartIcon.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer-main-box">
            <div className="container">
                <div className="footer-box">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="fs-6">Built with
                                <span className="d-inline-block" aria-label="love">
                                    <Image src={HeartIcon} alt="love" />
                                </span>
                                and GPT-4
                            </div>
                            <div className="fs-12">Version:
                                ALPHA 2.4 - MAR 17
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    );
};

export default Footer;