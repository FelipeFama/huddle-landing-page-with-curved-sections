import "../../styles/components/modules/userinfo.sass";
import communities from "/images/icon-communities.svg";
import messages from "/images/icon-messages.svg";

export default function UserInfo() {
  return (
    <section className="user-info">
      <article>
        <img src={communities} alt="communities icon" />
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </article>
      <article>
        <img src={messages} alt="messages icon" />
        <h1>2.7m+</h1>
        <p>Messages Sent</p>
      </article>
    </section>
  );
}
