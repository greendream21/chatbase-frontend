"use client";
import { useEffect, useState, useRef } from "react";
import { Source_Serif_Pro } from "next/font/google";
import { getSetting } from "../../redux/actions/settingActions";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const Chatbot = () => {
  const [chat_id, setChatId] = useState("");
  const chatbot_id = useAppSelector((state) => state.getSetting.chatbot_id);

  const [id, setId] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const req_qa_box: any = useRef(null);

  const [messages, setMessages] = useState([
    { content: "Hi! What can I answer for you today?", role: "assistant" },
  ]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id: any = params.get("id");
    setId(id);
    fetch(`${base_url}/api/chats?id=${id}&chat_id=${chat_id}`)
      .then((response) => response.json())
      .then((data) => setMessages([...messages, ...data]))
      .catch((error) => console.error(error));

    document
      .getElementById("input1")
      .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          if (document.querySelector("input").value !== "") {
            document.getElementById("myBtn").click();
          }
        }
      });
  }, []);

  const handleChatResponse = (message: any, answer: any, chat_id: any) => {
    document.getElementById("loading").style.display = "none";
    setMessages([...messages, ...[{ content: answer, role: "assistant" }]]);
    setChatId(chat_id);
    setInputMessage("");
    setIsFetching(false);
  };

  useEffect(() => {
    req_qa_box.current.scrollTop = req_qa_box.current.scrollHeight;

    if (isFetching) {
      console.log("fetching...");

      document.getElementById("loading").style.display = "flex";

      let data = {
        answer: "Here is response #" + Math.random(),
        chat_id: 100,
      };
      // setTimeout(() => {
      //   document.getElementById("loading").style.display = "none";
      // }, 2000);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatbot_id: chatbot_id,
          message: inputMessage,
        }),
      };

      const dataFetch = async () => {
        const data = await (
          await fetch(`http://localhost:8080/api/chat/create`, requestOptions)
        ).json();
        handleChatResponse(inputMessage, data.text, data.chat_id);
        document.getElementById("loading").style.display = "none";
      };
      dataFetch();

      document.getElementById("input1").value = "";
    }
  }, [isFetching]);

  useEffect(() => {
    req_qa_box.current.scrollTop = req_qa_box.current.scrollHeight;

    if (inputMessage) {
      setMessages([...messages, { content: inputMessage, role: "user" }]);
      setIsFetching(true);
    }
  }, [inputMessage]);

  const handleSendMessageMock = (message: any) => {
    if (!inputMessage) {
      setInputMessage(message);
    }
  };

  const PageReload = () => {
    if (!inputMessage) {
      setMessages([
        { content: "Hi! What can I answer for you today?", role: "assistant" },
      ]);
    }
  };

  return (
    <div id="chatdemo-container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ArrowPathIcon className="reload" onClick={PageReload} />
      </div>
      <hr />
      <div className="widget">
        {/* Render the messages */}
        <div className="chat-widget" ref={req_qa_box}>
          <div className="chat-content">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.role === "user" ? "user" : "bot"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div id="loading" style={{ display: "none" }}>
            <span className="loader"></span>
          </div>
        </div>
        <div>
          {/* Input for sending messages */}
          <div className="help-box-container">
            <div
              className="help-box"
              onClick={() =>
                handleSendMessageMock("What questions can you answer for me?")
              }
            >
              {" "}
              What questions can you answer for me?{" "}
            </div>
          </div>
          <div className="input-container">
            <input
              id="input1"
              type="text"
              className="input-text"
              placeholder="Type your message here..."
            />
            <button
              id="myBtn"
              className="send-button"
              onClick={() =>
                handleSendMessageMock(document.querySelector("input").value)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                width="1.25rem"
                height="1.25rem"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
