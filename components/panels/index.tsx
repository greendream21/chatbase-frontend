import ChatbotDemo from "./chatbotdemo";
import ChatbotSetting from "./chatbotsetting";
import ReChatbot from "./rechatbot";
import Dashboard from "./dashboard";
import Embed from "./embed";
import Share from "./share";
import Delete from "./delete";

type PanelsProps = {
  activeTab: number;
};

const Panels = ({ activeTab }: PanelsProps) => {
  return (
    <div className="setting-right-box">
      <div className="setting-body">
        <div id="myTabContent">
          {activeTab === 0 && <ChatbotDemo />}
          {activeTab === 1 && <ChatbotSetting />}
          {activeTab === 2 && <Dashboard />}
          {activeTab === 3 && <ReChatbot />}
          {activeTab === 4 && <Embed />}
          {activeTab === 5 && <Share />}
          {activeTab === 6 && <Delete />}
        </div>
      </div>
    </div>
  );
};

export default Panels;
