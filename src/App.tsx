import Header from "./components/Header";
import IntroText from "./components/IntroText";
import Illustration from "./components/Illustration";
import UserInfo from "./components/UserInfo";
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
