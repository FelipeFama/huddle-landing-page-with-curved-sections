import grow from "/images/illustration-grow-together.svg";
import "../../../styles/components/infos/firstInfo.sass";

export default function FirstInfo() {
  return (
    <article className="grow-content">
      <div className="bg-section-top"></div>
      <div className="grow-container">
        <article>
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </article>
        <figure>
          <img src={grow} alt="illustration grow" />
        </figure>
      </div>
      <div className="bg-section-bottom"></div>
    </article>
  );
}
