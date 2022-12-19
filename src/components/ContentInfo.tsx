import "../styles/components/contentinfo.sass";
import grow from "/images/illustration-grow-together.svg";
import flowing from "/images/illustration-flowing-conversation.svg";
import users from "/images/illustration-your-users.svg";

export default function ContentInfo() {
  return (
    <section className="content-info">
      <div className="info-container">
        <div className="bg-section-top"></div>
        <div>
          <article className="grow-container">
            <div>
              <h1>Grow Together</h1>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
            <figure>
              <img src={grow} alt="illustration grow" />
            </figure>
          </article>
            <div className="bg-section-top"></div>
        </div>

        <article className="flowing-container">
          <div>
            <h1>Flowing Conversations</h1>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
          <figure>
            <img src={flowing} alt="illustration flowing" />
          </figure>
        </article>

        <article className="users-container">
          <div>
            <h1>Your Users</h1>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <figure>
            <img src={users} alt="illustration users" />
          </figure>
        </article>
      </div>
    </section>
  );
}
