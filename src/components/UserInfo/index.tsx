import "./style.sass";
import { assetsProject } from "../../utils/data";

export default function UserInfo() {
  return (
    <section className="user-info">
      <article className="user">
        <img
          src={assetsProject.userInfo.communities.source}
          alt={assetsProject.userInfo.communities.alt}
        />
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </article>
      <article className="message">
        <img
          src={assetsProject.userInfo.messages.source}
          alt={assetsProject.userInfo.messages.alt}
        />
        <h1>2.7m+</h1>
        <p>Messages Sent</p>
      </article>
    </section>
  );
}
