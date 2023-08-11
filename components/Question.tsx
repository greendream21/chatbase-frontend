
// import HeartBtnIcon from "@/assets/imges/HeartBtnIcon.svg";
import EditIcon from "@/assets/imges/editIcon.svg";
import Image from "next/image";
import Time from "./Time";
import Avatar from "./Avatar";

type QuestionProps = {
    question: string,
    askTime: string,
};

const Question = ({ question, askTime }: QuestionProps) => {
    return (
        <div className="msg-outer user-msg">
            <div className="top">
                <Avatar name="Y" />
                <div className="msg-body">
                    <div className="msg-header">
                        <p>{question}</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="msg-footer">
                    <Time time={askTime} />
                    <div className="msg-fav-edit">
                        <div className="msg-favorite">
                            <button aria-label="favorite message"
                                className="msg-favorite favorite-wrapper favorite favorite-button"
                                type="button"
                            >
                                {/* <Image src={HeartBtnIcon} alt="like" /> */}
                                <svg stroke="currentColor" fill="none"
                                    strokeWidth="2" viewBox="0 0 24 24"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="msg-edit">
                            <button aria-label="edit message"
                                className="msg-edit edit-wrapper" type="button"
                            >
                                <Image src={EditIcon} alt="edit" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;