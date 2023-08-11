import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Tabs from "@/components/Tabs";
import Panels from "@/components/panels";
import Main from "@/components/layout/Main";
import { getChatbotList } from "../../redux/actions/settingActions";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { set_chatbotId } from "../../redux/reducer/settingReducer";

const Settings = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<number>(0);
  const router = useRouter();
  const { chatbotId } = router.query;

  dispatch(set_chatbotId(chatbotId));

  const handleTabChange = (tabIndex: number) => {
    console.log("tabIndex : ", tabIndex);
    setActiveTab(tabIndex);
  };

  return (
    <Main>
      <Fragment>
        <Head>
          <title>chatbot</title>
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
