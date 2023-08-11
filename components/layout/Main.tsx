import { Fragment, PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Main = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="page">
                <div className="main-wrap">
                    <Header />
                    <main>
                        <Fragment>
                            {children}
                        </Fragment>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;