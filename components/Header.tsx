import LogoIpsum from "@/assets/imges/dtonomylogo.svg";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";
import MenuList from "./MenuList";
import { Fragment, useContext } from "react";
import useToggle from "@/hooks/useToggle";
import { SideMenuContext } from "@/context";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onToggle } = useToggle();
  const { toggleSideMenu } = useContext(SideMenuContext);
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isChatbotPage = router.pathname === "/chatbot";

  return (
    <Fragment>
      {isLoginPage ? (
        <header className="main-header">
          <nav className="navigetion">
            <div className="navlisting">
              <div className="left">
                <div className="logo">
                  <Link href="/">
                    <Image src={LogoIpsum} alt="logo" title="main-logo" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <header className="main-header">
          <nav className="navigetion">
            <div className="navlisting">
              <div className="left">
                {isChatbotPage && (
                  <div className="humburger-left" onClick={toggleSideMenu}>
                    <a className="main-header-menu-icon d-lg-none">
                      <span></span>
                    </a>
                  </div>
                )}
                <div className="logo">
                  <Link href="/">
                    <Image src={LogoIpsum} alt="logo" title="main-logo" />
                  </Link>
                </div>

                <MenuList />
              </div>
              <div className="right">
                <LoginButton />
                <div className="humburger-right" onClick={onToggle}>
                  <Link href="#" className="main-header-menu-icon d-lg-none">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Responsive */}
          <div className={`responsive-bar ${isOpen ? "slide-left" : ""}`}>
            <MenuList />
            <LoginButton className="Login2-btn" />
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
