import "../styles/components/contentinfo.sass";
import FirstInfo from "./modules/infos/FirstInfo";

export default function ContentInfo() {
  return (
    <section className="content-info">
      <FirstInfo />
      {/*
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
  */}
    </section>
  );
}
