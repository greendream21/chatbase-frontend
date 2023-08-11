import { useState } from "react";
import Card from "./Card";
import writingGoals from "@/_mock/writingGoals";

const WritingGoals = () => {
    const [activeGoal, setActiveGoal] = useState<number>(0);

    return (
        <div className="writing-style-box">
            <div className="img-box">
                <svg stroke="currentColor" fill="none"
                    strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0" height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10">
                    </circle>
                    <circle cx="12" cy="12" r="6">
                    </circle>
                    <circle cx="12" cy="12" r="2">
                    </circle>
                </svg>
            </div>
            <div className="writing-style-dis">
                <div className="writing-goals">
                    <div className="sub-heading">
                        <h4>Writing Goals</h4>
                        <p>
                            You may select one writing goal.
                        </p>
                    </div>
                    <div className="writing-goals-cards">
                        {writingGoals.map(({ title, description }, index) => (
                            <Card
                                key={index}
                                title={title}
                                description={description}
                                onToggle={() => setActiveGoal(index)}
                                className={
                                    (index === activeGoal ? 'active-card' : '')
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WritingGoals;
