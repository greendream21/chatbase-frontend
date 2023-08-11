import { useEffect } from "react";
// import { gapi } from "gapi-script";
import Image from "next/image";
import GoogleIcon from "@/assets/imges/google.png";
import MicrosoftIcon from "@/assets/imges/microsoft.png";
import { Icon } from "semantic-ui-react";
import Input from "@/components/Input";
import { Fragment, useState } from "react";
import inputFields from "@/_mock/login";
import Head from "next/head";
import Main from "@/components/layout/Main";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import MicrosoftLogin from "react-microsoft-login";
import { notification } from "antd";

import { login } from "../redux/actions/AuthActions";
type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });
  const [accessToken, setAccessToken] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [optionsVisibity, setOptionsVisibility] = useState(true);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  async function start() {
    const gapi = await import("gapi-script").then((pack) => pack.gapi);
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "1037111719801-57leuusf3igree0os4oaa7iu2qf8uocs.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  useEffect(() => {
    start();
  }, []);

  const authSuccessful = (response: any) => {
    setAccessToken(response.accessToken);
    setOptionsVisibility(false);
  };

  const authHandler = (err: any, data: any) => {
    if (data && data.authResponseWithAccessToken) {
      setAccessToken(data.authResponseWithAccessToken.accessToken);
    }
    setOptionsVisibility(false);
    setAuthorized(true);
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  const responseGoogle = async (response: any) => {
    const loginData = {
      mail: response.profileObj.email,
      type: 1,
    };

    await login(loginData)
      .then((result: any) => {
        const token = result.data.token;
        localStorage.setItem("jwtToken", token);
        notification.success({
          message: ` Successfully Login`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Main>
      <Fragment>
        <Head>
          <title>Login</title>
        </Head>
        <section id="loginPage">
          <div className="login-main-box">
            <div className="container">
              <div className="log-google">
                <div className="flex">
                  <div className="login">
                    <div className="oauth-btn">
                      <div className="oauth-element">
                        <GoogleLogin
                          clientId="1037111719801-57leuusf3igree0os4oaa7iu2qf8uocs.apps.googleusercontent.com"
                          buttonText="Sign in with Google"
                          scope="profile"
                          onFailure={onFailure}
                          cookiePolicy={"single_host_origin"}
                          onSuccess={responseGoogle}
                          isSignedIn={true}
                          className="oauth-google-element"
                        />
                      </div>

                      <div className="oauth-element">
                        <MicrosoftLogin
                          clientId={"baa3b947-094b-490f-91c6-318f2eabf0fe"}
                          authCallback={authHandler}
                          graphScopes={["user.read", "Files.Read.All"]}
                          children={undefined}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Main>
  );
};

export default Login;
