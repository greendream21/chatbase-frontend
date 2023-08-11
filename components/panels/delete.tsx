import Head from "next/head";
import { Fragment } from "react";
import Title from "./Title";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { delete_chatbot } from "../../redux/actions/settingActions";
import { notification } from "antd";

const Delete = () => {
  const chatbot_id = useAppSelector((state) => state.getSetting.chatbot_id);

  const delete_bot = () => {
    const sendData = {
      chatbot_id: chatbot_id,
    };
    delete_chatbot(sendData)
      .then((result: any) => {
        if (result.status == 200) {
          notification.success({
            message: `successfully saved`,
          });
          window.location.href = "http://localhost:3000/chatbot";
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Head>Delete Chatbot</Head>
      <section id="delete">
        <div className="widget">
          <Title title="Delete Chatbot" />
          <div className="element">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div style={{ paddingLeft: 10 }}>
              <span className="topic">Delete chatbot</span>
              <span className="description">
                Are you sure you want to delete your chatbot? This action cannot
                be undone.
              </span>
              <div className="btn-form">
                <button className="full-btn" onClick={delete_bot}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Delete;
