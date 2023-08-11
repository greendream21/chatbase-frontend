import { ChatDataType } from "@/pages/chatbot";
import React, { forwardRef } from "react";
import Answer from "./answer";
import Question from "./Question";

type ChatsProps = {
    chatData: ChatDataType;
};

type ChatsRef = HTMLDivElement;

const Chats = forwardRef<ChatsRef, ChatsProps>((props, ref) => {
    const { chatData } = props;

    return (
        <div className="chat-body scroll-box">
            {chatData.map(({ question, askTime, answer }, index) => (
                <React.Fragment key={index}>
                    <div ref={index === chatData.length - 1 ? ref : null}>
                        <Question question={question} askTime={askTime} />
                    </div>
                    <Answer answer={answer} />
                </React.Fragment>
            ))}
        </div>
    );
});

Chats.displayName = "Chats";

export default Chats;
