import "../styles/components/contentInfo.sass";
import FirstInfo from "./modules/infos/FirstInfo";
import SecondInfo from "./modules/infos/SecondInfo";
import ThirdInfo from "./modules/infos/ThirdInfo";

export default function ContentInfo() {
  return (
    <section className="content-info">
      <FirstInfo />
      <SecondInfo />
      <ThirdInfo />
    </section>
  );
}
