import Head from "next/head";
import { Fragment, useEffect } from "react";
import Title from "./Title";

import React from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  get_embedded_visibleList,
  update_embedded_visible,
  update_embedded_domains,
} from "../../redux/actions/settingActions";

const Embed = () => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [faildOpen, setFaildOpen] = React.useState(false);
  const [domain, setDomain] = React.useState("");

  const [embedded_visible_List, set_embedded_visible_list] = React.useState([]);

  const [link, setLink] = React.useState("");
  var domainLink = "";

  const chatbot_id = useAppSelector((state) => state.getSetting.chatbot_id);

  const handleClick = () => {
    var visiblelist = document.getElementById("embedded_visible");
    var visible = visiblelist.options[visiblelist.selectedIndex].value;

    const sendData = {
      chatbot_id: chatbot_id,
      visible: visible,
    };
    update_embedded_visible(sendData)
      .then((res) => {
        setSuccessOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClose = () => {
    setSuccessOpen(false);
  };

  const onChangeDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    domainLink = e.target.value;
    setDomain(domainLink);
  };

  const handleDomainClick = () => {
    const domains_str = document.getElementById("embedded-domains").value;

    setDomain(domainLink);
    if (domain) {
      const chatbot_id = localStorage.getItem("chatbot_id");
      setChatbotId(chatbot_id);
      const sendData = {
        chatbot_id: chatbot_id,
        domains: domains_str,
      };
      update_embedded_domains(sendData)
        .then((res) => {
          setSuccessOpen(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFaildOpen(true);
    }
  };

  useEffect(() => {
    get_embedded_visibleList()
      .then((res) => {
        set_embedded_visible_list(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <Head>Embed on Website</Head>
      <section id="embed">
        <div className="widget">
          <Title title="Embed on Website" />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={successOpen}
            autoHideDuration={1000}
          >
            <Alert severity="success" style={{ minWidth: 300 }}>
              <AlertTitle>Success</AlertTitle>
              Chatbot visibility updated
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={faildOpen}
            autoHideDuration={1000}
          >
            <Alert severity="warning" style={{ minWidth: 300 }}>
              <AlertTitle>Warning</AlertTitle>
              Domain invaild
            </Alert>
          </Snackbar>
          {!successOpen ? (
            <div className="element">
              <span className="topic">Change chatbot visibility</span>
              <span className="title">Visibilty</span>
              {embedded_visible_List.length == 0 ? (
                ""
              ) : (
                <select
                  className="chatbot-select"
                  defaultValue={0}
                  id="embedded_visible"
                >
                  {embedded_visible_List.map((item, index) => (
                    <option value={item["_id"]}>{item["visible_name"]}</option>
                  ))}
                </select>
              )}

              <span className="description">
                'Private but can be embedded on website' means other people
                can't access your chatbot if they have the link, but visitors on
                your website can access it.
              </span>
              <div className="btn-form">
                <button className="full-btn" onClick={handleClick}>
                  Save changes
                </button>
              </div>
            </div>
          ) : !chatbot_id ? (
            <div className="element">
              <span className="topic">Set your domains</span>
              <span className="description">
                Enter each domain in a new line.
              </span>
              <textarea
                id="embedded-domains"
                className="embed-textarea"
                placeholder="example.com"
                onChange={onChangeDomain}
              ></textarea>
              <div className="btn-form">
                <button className="full-btn" onClick={handleDomainClick}>
                  Set domains
                </button>
              </div>
            </div>
          ) : (
            <div className="element">
              <span className="description">
                To add the chatbot any where on your website, add this iframe to
                your html code
              </span>
              <pre className="code-form">
                &lt;iframe
                <br />
                &ensp;src="https://localhost:3000/chatbot-iframe/{chatbot_id}"
                <br />
                &ensp;width="100%"
                <br />
                &ensp;height="700"
                <br />
                &ensp;frameborder="0"
                <br />
                &gt;&lt;/iframe&gt;
              </pre>
              <span className="description">
                To add a chat bubble to the bottom right of your website add
                this script tag to your html
              </span>
              <pre className="code-form">
                &lt;script
                <br />
                &ensp;src="http://localhost:8081/widget.js"
                <br />
                &ensp;data-chat-app-id="chatbot"
                <br />
                &ensp;data-app-key="{chatbot_id}"&gt;
                <br />
                &lt;/script&gt;
              </pre>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Embed;
