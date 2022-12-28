import "./style.sass";
import FirstInfo from "./infos/FirstInfo";
import SecondInfo from "./infos/SecondInfo";
import ThirdInfo from "./infos/ThirdInfo";

export default function ContentInfo() {
  return (
    <section className="content-info">
      <FirstInfo />
      <SecondInfo />
      <ThirdInfo />
    </section>
  );
}
