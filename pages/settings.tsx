import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Tabs from "@/components/Tabs";
import Panels from "@/components/panels";
import Main from "@/components/layout/Main";
import { getChatbotList } from "../redux/actions/settingActions";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (tabIndex: number) => {
    console.log("tabIndex : ", tabIndex);
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const mail = localStorage.getItem("google_mail");

    if (!mail) {
      window.location.pathname = "/chatbot";
    } else {
      const sendData = {
        mail: mail,
      };
      getChatbotList(sendData)
        .then((res) => {
          if (res.data.data.length == 0) {
            window.location.pathname = "/chatbot";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Main>
      <Fragment>
        <Head>
          <title>Settings</title>
        </Head>
        <section id="settingsPage">
          <div className="setting-main-box">
            <div className="container">
              <div className="row pd-box">
                <div className="col-lg-3">
                  <Tabs
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                  />
                </div>
                <div className="col-lg-9">
                  <Panels activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Main>
  );
};

export default Settings;
