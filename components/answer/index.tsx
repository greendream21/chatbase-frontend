import { AnswerType } from "@/pages/chatbot";
import Image from "next/image";
import LogoIcon from "@/assets/imges/icon.svg";
import Footer from "./Footer";
import AnsBody from "./AnsBody";

type AnswerProps = {
    answer: AnswerType | any;
};

const Answer = ({ answer }: AnswerProps) => {
    const { type, respondTime, data } = answer;

    return (
        <div className="msg-outer chatbot-msg">
            <div className="top">
                <div className="log">
                    <Image src={LogoIcon} alt="logo" title="logo" />
                </div>
                <div className="msg-body">
                    <AnsBody type={type} data={data} />
                </div>
            </div>
            <Footer respondTime={respondTime} />
        </div>
    );
};

export default Answer;