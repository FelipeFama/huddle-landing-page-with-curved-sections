import { assetsProject } from "../../../../utils/data";
import "./style.sass";

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
          <img
            src={assetsProject.contentInfo.grow.source}
            alt={assetsProject.contentInfo.grow.alt}
          />
        </figure>
      </div>
      <div className="bg-section-bottom"></div>
    </article>
  );
}
