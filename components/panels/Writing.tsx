import AboutMe from "./AboutMe";
import Title from "./Title";
import WritingGoals from "./WritingGoals";

const Writing = () => {
    return (
        <div
            id="contact"
            aria-labelledby="contact-tab"
        >
            <div className="scroll-bar-wrap">
                <div className="scroll-box">
                    <Title title="Writing" />
                    <div className="sectting-contain">
                        <div className="writing-style-listing">
                            <AboutMe />
                            <WritingGoals />
                            <WritingGoals />
                        </div>
                    </div>
                </div>
                <div className="cover-bar"></div>
            </div>
        </div>
    )
};

export default Writing;
