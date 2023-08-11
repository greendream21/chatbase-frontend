import { PropsWithChildren } from "react";
import Header from "../Header";

const Custom = ({ children }: PropsWithChildren) => {
    return (
        <div className="page" style={{overflow: 'auto'}}>
            <div className="main-wrap">
                <Header />
                <main>
                    <>
                        {children}
                    </>
                </main>
            </div>
        </div>
    );
};

export default Custom;
