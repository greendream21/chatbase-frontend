import Head from "next/head";
import { Fragment } from "react";
import Main from "@/components/layout/Main";

const Home = () => {
  return (
    <Main>
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          {/* Home page content goes here */}
        </div>
      </Fragment>
    </Main>
  );
};

export default Home;

