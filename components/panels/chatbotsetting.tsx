import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Title from "./Title";
import NumberFormat from "react-number-format";

import ChatInterface from "./chatbotinterface";
import {
  getSetting,
  updateSetting,
  iconUpload,
} from "../../redux/actions/settingActions";
import { notification } from "antd";

const ChatbotSetting = () => {
  const chatbot_id = useAppSelector((state) => state.getSetting.chatbot_id);

  const [chatbotId, setChatbotId] = useState("");
  const [charNum, setCharNum] = useState<number>(3553);
  const [chatbotName, setChatbotName] = useState("");
  const [basePrompt, setBasePrompt] = useState(``);
  const [msgLimit, setMsgLimit] = useState<number>();
  const [timeLimit, setTimeLimit] = useState<number>();
  const [limitHint, setLimitHint] = useState("");

  const [initMsg, setInitMsg] = useState("");
  const [sugMsg, setSugMsg] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [backColor, setBackColor] = useState("#FFFFFF");
  const [userMsgColor, setUserMsgColor] = useState("#4B3D8F");
  const [iconColor, setIconColor] = useState("#37A987");
  const [iconPos, seticonPos] = useState("flex-end");
  const [checkProfileIcon, setCheckProfileIcon] = useState<boolean>(false);
  const [checkChatIcon, setCheckChatIcon] = useState<boolean>(false);
  const [profileIconUrl, setProfileIconUrl] = useState("");
  const [chatIconUrl, setChatIconUrl] = useState("");

  const [selectedProfileIcon, setSelectedProfileIcon] = useState(null);
  const [selectedChatIcon, setSelectedChatIcon] = useState(null);

  const [modelList, setModelList] = useState([]);
  const [visibleList, setVisibleList] = useState([]);

  const [currentModel, setCurrentModel] = useState("");
  const [currentVisibility, setCurrentVisibility] = useState("");

  const [initMsgShowtime, setInitMsgShowtime] = useState<number>();

  var nf = new Intl.NumberFormat();
  nf.format(charNum);

  useEffect(() => {
    // var chatbot_id = localStorage.getItem("chatbot_id");
    getSetting(chatbot_id)
      .then((result) => {
        const data = result.data.data;

        setModelList(data.model);
        setVisibleList(data.visibility);

        setCurrentModel(data.setting.model._id);
        setCurrentVisibility(data.setting.visibility._id);

        setChatbotId(data.setting._id);
        setChatbotName(data.setting.chatbot_name);
        setBasePrompt(data.setting.base_prompt);
        setCharNum(data.setting.characters_number);

        setMsgLimit(data.setting.rate_msg);
        setTimeLimit(data.setting.rate_second);
        setLimitHint(data.setting.limit_msg);

        setInitMsg(data.setting.interface_init_msg);
        setInitMsgShowtime(data.setting.auto_msg_second);

        setProfileIconUrl(data.setting.profile_picture);
        setChatIconUrl(data.setting.chat_icon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const save_change = async () => {
    var modelist = document.getElementById("model_select");
    var model = modelist.options[modelist.selectedIndex].value;

    var visibleList = document.getElementById("visibility_select");
    var visible = visibleList.options[visibleList.selectedIndex].value;

    var limitHint = document.getElementById("limithint-input").value;

    const formData = new FormData();
    //formData.append("chatbot_id", chatbot_id);
    // formData.append("profileIcon", selectedProfileIcon);
    // formData.append("chatIcon", selectedChatIcon);

    let sendData = {
      chatbot_name: document.getElementById("chatbot_name").value,
      base_prompt: document.getElementById("base_prompt").value,
      model: model,
      visibility: visible,
      domain: document.getElementById("domains").value,
      rate_msg: document.getElementById("msgLimit").value,
      rate_second: document.getElementById("timeLimit").value,
      limit_msg: limitHint,
      interface_init_msg: initMsg,
      interface_suggest_msg: sugMsg,
      theme: backColor,
      profile_picture: profileIconUrl,
      remove_profile_picture: checkProfileIcon,
      display_name: displayName,
      user_msg_color: userMsgColor,
      chat_icon: chatIconUrl,
      remove_icon: checkChatIcon,
      bubble_btn_color: "",
      align_bubble_btn: iconPos == "flex-end" ? "right" : "left",
      auto_msg_second: initMsgShowtime,
    };

    console.log("sendData:", sendData);
    console.log("chatIconUrl", selectedChatIcon);
    console.log("profileIconUrl", selectedProfileIcon);

    // if (chatIconUrl && profileIconUrl) {
    //   console.log("both");
    //   formData.append("Icon", selectedChatIcon);
    //   iconUpload(formData)
    //     .then((result) => {
    //       if (result.status == 200) {
    //         sendData.chat_icon = result.data.data.iconName;
    //         formData.delete("Icon");
    //         formData.append("Icon", selectedProfileIcon);
    //         iconUpload(formData)
    //           .then((result) => {
    //             if (result.status == 200) {
    //               sendData.profile_picture = result.data.data.iconName;
    //               sendData.chatbot_id = chatbot_id;
    //               updateSetting(sendData)
    //                 .then((result) => {
    //                   if (result.status == 200) {
    //                     notification.success({
    //                       message: `successfully saved`,
    //                     });
    //                   }
    //                 })
    //                 .catch((err) => {
    //                   console.log(err);
    //                 });
    //             }
    //           })
    //           .catch((err) => {
    //             console.log(err);
    //           });
    //       } else {
    //         console.log("upload failed");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else

    // updateSetting(sendData)
    //   .then((result) => {
    //     if (result.status == 200) {
    //       notification.success({
    //         message: `successfully saved`,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (!selectedChatIcon && !selectedProfileIcon) {
      sendData.chatbot_id = chatbot_id;
      updateSetting(sendData)
        .then((result) => {
          if (result.status == 200) {
            notification.success({
              message: `successfully saved`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    if (chatIconUrl && selectedChatIcon) {
      console.log("chat");
      console.log(selectedChatIcon);
      formData.append("Icon", selectedChatIcon);
      await iconUpload(formData).then((result) => {
        if (result.status == 200) {
          sendData.chat_icon = result.data.data.iconName;
          sendData.chatbot_id = chatbot_id;
          console.log("chatIcon", sendData);
          updateSetting(sendData)
            .then((result) => {
              if (result.status == 200) {
                notification.success({
                  message: `successfully saved`,
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
    if (profileIconUrl && selectedProfileIcon) {
      console.log("profile");
      console.log(selectedProfileIcon);
      formData.delete("Icon");
      formData.append("Icon", selectedProfileIcon);
      await iconUpload(formData)
        .then((result) => {
          if (result.status == 200) {
            sendData.profile_picture = result.data.data.iconName;
            sendData.chatbot_id = chatbot_id;
            console.log("profileIcon", sendData);
            updateSetting(sendData)
              .then((result) => {
                if (result.status == 200) {
                  notification.success({
                    message: `successfully saved`,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const reset = (type: any) => {
    if (type == 0) {
      document.getElementById("base_prompt").value = basePrompt;
    } else if (type == 1) {
      document.getElementById("msgLimit").value = msgLimit;
      document.getElementById("timeLimit").value = timeLimit;
      document.getElementById("limithint-input").value = limitHint;
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Setting</title>
      </Head>
      <section id="chatbotsetting">
        <div className="widget">
          <Title title="Setting" />
          <div className="element" style={{ paddingTop: 32 }}>
            <span className="topic">Chatbot ID</span>
            <span className="chatbot-id">{chatbotId}</span>
          </div>
          <div className="element">
            <span className="topic">Number of characters</span>
            <span className="chatbot-id">{nf.format(charNum)}</span>
          </div>
          <div className="element">
            <span className="topic">Name</span>
            <input
              className="chatbot-input"
              id="chatbot_name"
              defaultValue={chatbotName}
            />
          </div>
          <div className="element">
            <div className="topic">
              <span>Base Prompt (system message)</span>
              <button className="reset" onClick={() => reset(0)}>
                Reset
              </button>
            </div>
            <textarea
              className="chatbot-textarea"
              id="base_prompt"
              style={{ minHeight: 110 }}
              defaultValue={basePrompt}
            />
          </div>
          <div className="element">
            <span className="suggest">
              gpt-4 is much better at following the base prompt and not
              hallucinating
            </span>
            <span className="topic">Model</span>
            {/* <select className="chatbot-select" defaultValue={0}>
                {modelList.length == 0?"":{modelList.map}}
              <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
              <option value="gpt-4">gpt-4</option>
            </select> */}
            {modelList.length == 0 ? (
              ""
            ) : (
              <select
                className="chatbot-select"
                defaultValue={currentModel}
                id="model_select"
              >
                {modelList.map((item, index) => (
                  <option value={item["_id"]}>{item["model_name"]}</option>
                ))}
              </select>
            )}
            <span className="description">
              1 message using gpt-3.5-turbo costs 1 message credit. 1 message
              using gpt-4 costs 20 message credits.
            </span>
          </div>
          <div className="element">
            <span className="topic">Visibilty</span>
            {/* <option value="Private">Private</option>
              <option value="private_but_can_be_embedded">
                private but can be embedded
              </option>
              <option value="public">public</option> */}
            {visibleList.length == 0 ? (
              ""
            ) : (
              <select
                className="chatbot-select"
                defaultValue={currentVisibility}
                id="visibility_select"
              >
                {visibleList.map((item, index) => (
                  <option value={item["_id"]}>{item["visible_name"]}</option>
                ))}
              </select>
            )}
            <span className="description">
              'Private': No one can access your chatbot except you (your
              account)
            </span>
            <span className="description">
              'Private but can be embedded on website': Other people can't
              access your chatbot if you send them the link, but you can still
              embed it on your website and your website visitors will be able to
              use it. (make sure to set your domains)
            </span>
            <span className="description">
              ''Public': Anyone with the link can access it on chatbase.co and
              can be embedded on your website.
            </span>
            <span className="description">
              Set to public if you want to be able to send a link of your
              chatbot to someone to try it.
            </span>
          </div>
          <div className="element">
            <span className="topic">Domains</span>
            <textarea
              className="chatbot-textarea"
              id="domains"
              placeholder="example.com"
            />
            <span className="description">Enter each domain in a new line</span>
            <span className="description">
              Domains you want to embed your chatbot on. Your chatbot visibility
              has to be 'Public' or 'Private but can be embedded on website' for
              this to work.
            </span>
          </div>
          <div className="element">
            <div className="topic">
              <span>Rate Limiting</span>
              <button className="reset" onClick={() => reset(1)}>
                Reset
              </button>
            </div>
            <span className="description">
              Limit the number of messages sent from one device on the iframe
              and chat bubble (this limit will not be applied to you on
              chatbase.co, only on your website for your users to prevent
              abuse).
            </span>
            <div className="limit-form">
              <span className="title">Limit to only</span>
              <input
                className="limit-input"
                type="number"
                id="msgLimit"
                defaultValue={msgLimit}
              />
              <span className="title">messages every</span>
              <input
                className="limit-input"
                type="number"
                id="timeLimit"
                defaultValue={timeLimit}
              />
              <span className="title">seconds.</span>
            </div>
            <div className="limithint-form">
              <span className="title">
                Show this message to show when limit is hit
              </span>
              <input
                className="limithint-input"
                defaultValue={limitHint}
                id="limithint-input"
              />
            </div>
          </div>
          <ChatInterface
            initMsg={initMsg}
            setInitMsg={setInitMsg}
            initMsgShowtime={initMsgShowtime}
            setInitMsgShowtime={setInitMsgShowtime}
            sugMsg={sugMsg}
            setSugMsg={setSugMsg}
            displayName={displayName}
            setDisplayName={setDisplayName}
            backColor={backColor}
            setBackColor={setBackColor}
            setUserMsgColor={setUserMsgColor}
            userMsgColor={userMsgColor}
            iconColor={iconColor}
            setIconColor={setIconColor}
            iconPos={iconPos}
            setIconPos={seticonPos}
            checkProfileIcon={checkProfileIcon}
            setCheckProfileIcon={setCheckProfileIcon}
            checkChatIcon={checkChatIcon}
            setCheckChatIcon={setCheckChatIcon}
            profileIconUrl={profileIconUrl}
            setProfileIconUrl={setProfileIconUrl}
            chatIconUrl={chatIconUrl}
            setChatIconUrl={setChatIconUrl}
            setSelectedProfileIcon={setSelectedProfileIcon}
            setSelectedChatIcon={setSelectedChatIcon}
          />
          <div className="btn-form">
            <button className="btn" onClick={save_change}>
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ChatbotSetting;
