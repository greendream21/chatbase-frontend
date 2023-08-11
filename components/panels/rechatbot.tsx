import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Main from "@/components/layout/Main";
import Image from "next/image";
import BackIcon from "@/assets/imges/back.png";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Upload, notification, Button } from "antd";
import { create_botSetting } from "@/redux/reducer/settingReducer";
import {
  scraping_url,
  createSetting,
  web_scraping_chatbot,
} from "../../redux/actions/settingActions";

import Title from "./Title";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { forEach } from "lodash";

import { UploadOutlined } from "@ant-design/icons";

const ReChatbot = () => {
  const [url, setUrl] = React.useState("");
  const [file, setFile] = useState();
  const [linkList, setLinkList] = React.useState([]);

  const deleteAll = () => {
    setLinkList([]);
  };

  const fetch_links = async () => {
    const sendData = {
      URL: document.getElementById("crawl_url").value + "/",
      limit_count: 20,
    };

    await scraping_url(sendData)
      .then((result) => {
        const urlList = result.data.data;
        let temp = [];
        for (let index = 0; index < urlList.length; index++) {
          const element = urlList[index];
          temp.push({ link: element });
        }
        //console.log(temp);
        setLinkList(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOne = async (index: any) => {
    setLinkList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  console.log(linkList);

  const add = () => {
    setLinkList(linkList.concat({ link: "" }));
  };

  const props = {
    name: "fileList",
    headers: {
      authorization: "authorization-text",
    },
    maxCount: 1,
    onChange(e: any) {
      setUrl(URL.createObjectURL(e.file.originFileObj));
      setFile(e.file);
    },
  };

  const dispatch = useAppDispatch();
  const chatbot_id = useAppSelector((state) => state.getSetting.chatbot_id);

  const [pdfCollection, setPdfCollection] = useState("");

  // const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let files = e.target.files;
  //   if (!files) return;
  //   files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  //   console.log(files.length);
  // };

  const onFiles = () => {
    let state = document.getElementById("files").style.display;

    if (state === "none") {
      document.getElementById("list").style.display = "none";
      document.getElementById("files").style.display = "flex";
    } else {
      document.getElementById("list").style.display = "flex";
      document.getElementById("files").style.display = "none";
    }
  };

  const onWebsite = () => {
    let state = document.getElementById("website").style.display;

    if (state === "none") {
      document.getElementById("list").style.display = "none";
      document.getElementById("website").style.display = "flex";
    } else {
      document.getElementById("list").style.display = "flex";
      document.getElementById("website").style.display = "none";
    }
  };

  const onText = () => {
    let state = document.getElementById("text").style.display;

    if (state === "none") {
      document.getElementById("list").style.display = "none";
      document.getElementById("text").style.display = "flex";
    } else {
      document.getElementById("list").style.display = "flex";
      document.getElementById("text").style.display = "none";
    }
  };

  const linkChange = (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
    linkList[index].link = e.target.value;
    setLinkList([...linkList]);
  };

  const retrainbot = (emebedding_type: any) => {
    var formData = new FormData();
    formData.append("embedding_type", emebedding_type);
    formData.append("chatbot_id", chatbot_id);
    formData.append("is_create", false);
    if (emebedding_type == 0) {
      formData.append("file", file.originFileObj);

      createSetting(formData)
        .then((res) => {
          notification.success({
            message: ` Successfully created `,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (emebedding_type == 1) {
      let chatbot_name = document.getElementById("chatbot_name").value;
      let content = document.getElementById("chatbot_data").value;
      formData.append("content", content);
      formData.append("chatbot_name", chatbot_name);

      createSetting(formData)
        .then((res) => {
          notification.success({
            message: ` Successfully created `,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (emebedding_type == 2) {
      const chatbot_name = document.getElementById("crawl_url").value;
      console.log("linkList", linkList);
      web_scraping_chatbot({
        linkList: linkList,
        chatbot_id: chatbot_id,
        is_create: false,
        chatbot_name: chatbot_name,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Setting</title>
      </Head>
      <section id="rechatbotPage">
        <div className="widget">
          <Title title="Replace Data" />
          <div id="main">
            <div id="list">
              <span className="title">Data source</span>
              <button className="btn" onClick={onFiles}>
                Files
              </button>
              <button className="btn" onClick={onText}>
                Text
              </button>
              <button className="btn" onClick={onWebsite}>
                Website
              </button>
            </div>
            <div id="files" style={{ display: "none" }}>
              <div className="upload">
                <div className="back">
                  <button className="back-btn" onClick={onFiles}>
                    <Image
                      className="back-btn-img"
                      src={BackIcon}
                      alt="back"
                      title="back"
                    />
                    <span className="back-btn-txt">Back</span>
                  </button>
                </div>
                <div>
                  {url ? (
                    <div
                      style={{
                        margin: "auto",
                        width: 244,
                      }}
                    >
                      <Document file={url}>
                        <Page
                          pageNumber={1}
                          scale={0.4}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                    </div>
                  ) : (
                    <div
                      style={{
                        alignItems: "center",
                        border: "2px dashed rgba(0, 0, 0, .3)",
                        display: "flex",
                        height: 150,
                        justifyContent: "center",
                        width: 244,
                        margin: "auto",
                      }}
                    >
                      Preview area
                    </div>
                  )}
                </div>
                <br />
                <span className="upload-txt">Upload Files</span>
                <br />
                <span className="attach-txt">
                  Attach a file to see how many characters are in it
                </span>
                <br />
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>

                <button className="btn" onClick={() => retrainbot(0)}>
                  Retrain Chatbot
                </button>
              </div>
            </div>
            <div id="text" style={{ display: "none" }}>
              <div className="back">
                <button className="back-btn" onClick={onText}>
                  <Image
                    className="back-btn-img"
                    src={BackIcon}
                    alt="back"
                    title="back"
                  />
                  <span className="back-btn-txt">Back</span>
                </button>
              </div>
              <input
                className="title"
                placeholder="Chatbot Name"
                id="chatbot_name"
              />
              <textarea className="data" placeholder="Data" id="chatbot_data" />
              <button className="btn" onClick={() => retrainbot(1)}>
                Create Chatbot
              </button>
            </div>
            <div id="website" style={{ display: "none" }}>
              <div className="back">
                <button className="back-btn" onClick={onWebsite}>
                  <Image
                    className="back-btn-img"
                    src={BackIcon}
                    alt="back"
                    title="back"
                  />
                  <span className="back-btn-txt">Back</span>
                </button>
              </div>
              <span className="header-description">
                Max crawl/scrape time is 45 seconds (limit will increase soon)
              </span>
              <div className="element">
                <span className="title">Crawl</span>
                <div className="input-form">
                  <input
                    id="crawl_url"
                    className="input"
                    placeholder="https://www.example.com"
                  />
                  <button className="btn" onClick={fetch_links}>
                    Fetch Links
                  </button>
                </div>
                <span className="description">
                  This will crawl all the links starting with the URL (not
                  including files on the website). Has to be server side
                  rendered website
                </span>
              </div>
              <div className="or">
                <hr className="or-hr" />
                <span className="or-text">OR</span>
                <hr className="or-hr" />
              </div>
              <div className="element">
                <span className="title">Submit Sitemap</span>
                <div className="input-form">
                  <input
                    className="input"
                    placeholder="https://www.example.com/sitemap.xml"
                  />
                  <button className="btn">Load Sitemap</button>
                </div>
              </div>
              <div className="element">
                <span className="title">Links to include</span>
                <div className="sbtn-widget">
                  {linkList.length != 0 ? (
                    <button className="del-all" onClick={deleteAll}>
                      Delete all
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
                {linkList.map((link, index) => (
                  <div key={index} className="link-form">
                    <input
                      className="link-input"
                      value={link.link}
                      onChange={(e) => {
                        linkChange(e, index);
                      }}
                      placeholder="https://www.example.com/privacy-policy"
                    />
                    <IconButton
                      type="submit"
                      style={{ marginLeft: 4 }}
                      onClick={() => deleteOne(index)}
                    >
                      <DeleteIcon className="link-delete" />
                    </IconButton>
                  </div>
                ))}
                <div className="sbtn-widget">
                  <button className="sbtn" onClick={add}>
                    Add
                  </button>
                </div>
              </div>
              <hr />
              <button className="bbtn" onClick={() => retrainbot(2)}>
                Create Chatbot
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ReChatbot;
