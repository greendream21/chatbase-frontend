import Time from "../Time";
import CopyIcon from "@/assets/imges/copyIcon.svg";
import Image from "next/image";

type FooterProps = { respondTime: string };

const Footer = ({ respondTime }: FooterProps) => {
    return (
        <div className="bottom">
            <div className="msg-footer">
                <Time time={respondTime} />
                <div className="msg-fav-edit">
                    <button aria-label="like" className="like-wrapper like active">
                        <svg stroke="currentColor" fill="none" strokeWidth="2"
                            viewBox="0 0 24 24" strokeLinecap="round"
                            strokeLinejoin="round" height="18" width="18"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                            </path>
                        </svg>
                    </button>
                    <button aria-label="dislike" className="like-wrapper dislike" >
                        <svg stroke="currentColor"
                            fill="none" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round"
                            height="18" width="18"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17">
                            </path>
                        </svg>
                    </button>
                    <button aria-label="copy to clipboard" className="msg-copy copy-wrapper">
                        <Image src={CopyIcon} alt="copy" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;