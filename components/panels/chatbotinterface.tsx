import React, { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const ChatInterface = (props: any) => {
  const initMesssag = "Hi! What can I help you with?";
  const userMsgColor = "#4B3D8F";
  const iconColor = "#37A987";

  const [msgBackColor, setMsgBackColor] = useState("#F4F4F5");
  const [msgColor, setMsgColor] = useState("#000000");

  const onChangeProfileIconUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (!files) return;
    files.length > 0 && props.setProfileIconUrl(URL.createObjectURL(files[0]));
    props.setSelectedProfileIcon(files[0]);
  };

  const onChangeChatIconUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (!files) return;
    files.length > 0 && props.setChatIconUrl(URL.createObjectURL(files[0]));
    props.setSelectedChatIcon(files[0]);
  };

  const setInitMsg = () => {
    props.setInitMsg(initMesssag);
    document.getElementById("initMsg").value = initMesssag;
  };

  const setUserMsgColor = () => {
    props.setUserMsgColor(userMsgColor);
    document.getElementById("userMsgColor").value = userMsgColor;
  };

  const setIconColor = () => {
    props.setIconColor(iconColor);
    document.getElementById("iconColor").value = iconColor;
  };

  const onChangeInitMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInitMsg(e.target.value);
  };

  const onChangeSugMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSugMsg(e.target.value);
  };

  const onChangeBackColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setBackColor(e.target.value);
    if (e.target.value == "dark") {
      props.setBackColor("#000000");
      document.getElementById("myBtn").style.filter = "invert(1)";
      document.getElementById("reload").style.filter =
        "brightness(0) invert(1)";

      setMsgBackColor("#3F3F45");
      setMsgColor("#FFFFFF");
    }

    if (e.target.value == "light") {
      props.setBackColor("#FFFFFF");
      document.getElementById("myBtn").style.filter = "brightness(1) invert(0)";
      document.getElementById("reload").style.filter =
        "brightness(1) invert(0)";

      setMsgBackColor("#F4F4F5");
      setMsgColor("#000000");
    }
  };

  const onChangeUserMsgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserMsgColor(e.target.value);
  };

  const onChangeIconColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setIconColor(e.target.value);
  };

  const onChangeIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "right") {
      props.setIconPos("flex-end");
    }

    if (e.target.value == "left") {
      props.setIconPos("flex-start");
    }
  };

  const onChangeInitMsgShowtime = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInitMsgShowtime(e.target.value);
  };

  const onChangeProfileIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCheckProfileIcon(e.target.checked);
    if (props.checkProfileIcon) {
      document.getElementById("profileicon").style.display = "flex";
      document.getElementById("profileimg").style.display = "flex";
    } else {
      document.getElementById("profileicon").style.display = "none";
      document.getElementById("profileimg").style.display = "none";
    }
  };

  const onChangeChatIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCheckChatIcon(e.target.checked);
    if (props.checkChatIcon) {
      document.getElementById("chaticon").style.display = "flex";
    } else {
      document.getElementById("chaticon").style.display = "none";
    }
  };

  const onChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setDisplayName(e.target.value);
  };

  return (
    <div id="chatinterface">
      <div className="topic-form">
        <span className="interface-topic">Chat Interface</span>
        <span className="description">applies when embedded on a website</span>
      </div>
      <div className="form">
        <div className="setting">
          <div className="element">
            <div className="topic">
              <span>Initial Messages</span>
              <button className="reset" onClick={setInitMsg}>
                Reset
              </button>
            </div>
            <textarea
              id="initMsg"
              className="chatbot-textarea"
              defaultValue={props.initMsg}
              onChange={onChangeInitMsg}
            />
            <span className="description">
              Enter each message in a new line.
            </span>
          </div>
          <div className="element">
            <div className="topic">
              <span>Suggested Messages</span>
            </div>
            <textarea
              className="chatbot-textarea"
              placeholder="What is example.com?,How does it work?"
              onChange={onChangeSugMsg}
            />
            <span className="description">
              Enter each message in a new line.
            </span>
          </div>
          <div className="element">
            <div className="topic">
              <span>Theme</span>
            </div>
            <select
              className="chatbot-select"
              defaultValue={0}
              onChange={onChangeBackColor}
            >
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </div>
          <div className="element" id="profileicon">
            <div className="topic">
              <span>Update chatbot profile picture</span>
            </div>
            <input
              type="file"
              className="chatbot-input"
              accept="image/png, image/gif, image/jpeg"
              onChange={onChangeProfileIconUrl}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>Remove Chatbot Profile Picture</span>
            </div>
            <input
              id="profileiconcheck"
              className="interface-checkbox"
              type="checkbox"
              checked={props.checkProfileIcon}
              onChange={onChangeProfileIcon}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>Display name</span>
            </div>
            <input className="chatbot-input" onChange={onChangeDisplayName} />
          </div>
          <div className="element">
            <div className="topic">
              <span>User Message Color</span>
              <button className="reset" onClick={setUserMsgColor}>
                Reset
              </button>
            </div>
            <input
              id="userMsgColor"
              className="chatbot-colorpicker"
              type="color"
              list="presetColors"
              defaultValue={props.userMsgColor}
              onChange={onChangeUserMsgColor}
            />
          </div>
          <div className="element">
            <span className="reference">
              **If the changes here don't show up immediately on your website
              try clearing your browser cache or use incognito. (New users will
              see the changes immediately)**
            </span>
          </div>
          <div className="element" id="chaticon">
            <div className="topic">
              <span>Update chatbot profile picture</span>
            </div>
            <input
              type="file"
              className="chatbot-input"
              accept="image/png, image/gif, image/jpeg"
              onChange={onChangeChatIconUrl}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>Remove chat icon</span>
            </div>
            <input
              id="chaticoncheck"
              className="interface-checkbox"
              type="checkbox"
              checked={props.checkChatIcon}
              onChange={onChangeChatIcon}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>User Message Color</span>
              <button className="reset" onClick={setIconColor}>
                Reset
              </button>
            </div>
            <input
              id="iconColor"
              className="chatbot-colorpicker"
              type="color"
              list="presetColors"
              defaultValue={props.iconColor}
              onChange={onChangeIconColor}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>Align Chat Bubble Button</span>
            </div>
            <select
              className="chatbot-select"
              defaultValue={0}
              onChange={onChangeIcon}
            >
              <option value="right">right</option>
              <option value="left">left</option>
            </select>
          </div>
          <div className="initmag-form">
            <span>Auto show initial messages after</span>
            <div className="limit-form">
              <input
                className="limit-input"
                type="number"
                defaultValue={props.initMsgShowtime}
                onChange={onChangeInitMsgShowtime}
              />
              <span>seconds (negative to disable)</span>
            </div>
          </div>
        </div>
        <div className="interface">
          <div id="chatinterface-container">
            <div
              className="widget"
              style={{ background: `${props.backColor}` }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {props.profileIconUrl ? (
                    <img
                      id="profileimg"
                      className="profileicon"
                      src={props.profileIconUrl}
                    />
                  ) : (
                    <div />
                  )}
                  {props.displayName ? (
                    <span
                      style={{ color: `${msgColor}` }}
                      id="displayname"
                      className="displayname"
                    >
                      {props.displayName}
                    </span>
                  ) : (
                    <div />
                  )}
                </div>
                <ArrowPathIcon id="reload" className="reload" />
              </div>
              <hr style={{ borderColor: "#e4e4e7" }} />
              {/* Render the messages */}
              <div className="chat-widget">
                <div className="chat-content">
                  <div
                    style={{
                      background: `${msgBackColor}`,
                      color: `${msgColor}`,
                    }}
                    className="message bot"
                  >
                    {props.initMsg}
                  </div>
                  <div
                    style={{ background: `${props.userMsgColor}` }}
                    className="message user"
                  >
                    Hi!
                  </div>
                </div>
              </div>
              <div>
                {/* Input for sending messages */}
                {props.sugMsg ? (
                  <div className="help-box-container">
                    <div
                      style={{
                        background: `${msgBackColor}`,
                        color: `${msgColor}`,
                      }}
                      className="help-box"
                      id="helpbox"
                    >
                      {" "}
                      {props.sugMsg}{" "}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="input-container"
                  style={{ backgroundColor: "transparent" }}
                >
                  <input
                    id="input1"
                    type="text"
                    className="input-text"
                    style={{
                      backgroundColor: "transparent",
                      color: `${msgColor}`,
                    }}
                  />
                  <button id="myBtn" className="send-button">
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
            <div
              id="chaticon"
              className="chaticon-form"
              style={{ justifyContent: `${props.iconPos}` }}
            >
              {props.chatIconUrl && !props.checkChatIcon ? (
                <img
                  id="chatimg"
                  className="chaticon"
                  src={props.chatIconUrl}
                />
              ) : (
                <div
                  className="chaticon"
                  style={{ background: `${props.iconColor}` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.3"
                    stroke="white"
                    width="24"
                    height="24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
