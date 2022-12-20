import "../styles/components/contentinfo.sass";
import FirstInfo from "./modules/infos/FirstInfo";
import SecondInfo from "./modules/infos/SecondInfo";
import ThirdInfo from "./modules/infos/ThirdInfo";

export default function ContentInfo() {
  return (
    <section className="content-info">
      <FirstInfo />
      <SecondInfo />
      <ThirdInfo />
      {/*
 

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
