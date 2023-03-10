import { assetsProject } from "../../../../utils/data";
import "./style.sass";

export default function SecondInfo() {
  return (
    <article className="flowing-content">
      <figure>
        <img
          src={assetsProject.contentInfo.flowing.source}
          alt={assetsProject.contentInfo.flowing.alt}
        />
      </figure>
      <article>
        <h1>Flowing Conversations</h1>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </article>
    </article>
  );
}
