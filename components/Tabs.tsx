type TabsProps = {
  activeTab: number;
  handleTabChange: (tabIndex: number) => void;
};
import { useAppSelector } from "@/redux/hooks";

const Tabs = ({ activeTab, handleTabChange }: TabsProps) => {
  const required_login = useAppSelector(
    (state) => state.getSetting.required_login
  );

  return (
    <div className="setting-left-box">
      {!required_login ? (
        <div className="scroll-bar-wrap aside-bar scroll-box side-bar-list head-dis-main-box heading">
          <li onClick={() => handleTabChange(0)}>
            <a className={`${activeTab === 0 ? "active" : ""}`}>
              <div className={`${activeTab === 0 ? "act" : "dis"}`}>
                Chatbot
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(1)}>
            <a className={`${activeTab === 1 ? "active" : ""}`}>
              <div className={`${activeTab === 1 ? "act" : "dis"}`}>
                Setting
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(2)}>
            <a className={`${activeTab === 2 ? "active" : ""}`}>
              <div className={`${activeTab === 2 ? "act" : "dis"}`}>
                Dashboard
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(3)}>
            <a className={`${activeTab === 3 ? "active" : ""}`}>
              <div className={`${activeTab === 3 ? "act" : "dis"}`}>
                Replace Data
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(4)}>
            <a className={`${activeTab === 4 ? "active" : ""}`}>
              <div className={`${activeTab === 4 ? "act" : "dis"}`}>
                Embed on website
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(5)}>
            <a className={`${activeTab === 5 ? "active" : ""}`}>
              <div className={`${activeTab === 5 ? "act" : "dis"}`}>
                Share Chatbot
              </div>
            </a>
          </li>
          <li onClick={() => handleTabChange(6)}>
            <a className={`${activeTab === 6 ? "active" : ""}`}>
              <div className={`${activeTab === 6 ? "act" : "dis"}`}>
                Delete Chatbot
              </div>
            </a>
          </li>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tabs;
