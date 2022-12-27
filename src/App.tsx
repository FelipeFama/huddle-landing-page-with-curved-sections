import React from "react";
import Header from "./components/Header";
import IntroText from "./components/modules/IntroText";
import Illustration from "./components/modules/Illustration";
import UserInfo from "./components/modules/UserInfo";
import ContentInfo from "./components/ContentInfo";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroText />
      <Illustration />
      <UserInfo />
      <ContentInfo />
      <SignUp />
      <div className="bg-section-footer"></div>
      <Footer />
    </>
  );
}

export default App;
