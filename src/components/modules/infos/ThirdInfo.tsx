import users from "/images/illustration-your-users.svg";
import "../../../styles/infos/thirdinfo.sass";

export default function ThirdInfo() {
  return (
    <article className="users-content">
      <div className="bg-section-top-2"></div>
      <div className="user-container">
        <article>
          <h1>Your Users</h1>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </article>
        <figure>
          <img src={users} alt="illustration users" />
        </figure>
      </div>
      <div className="bg-section-bottom-2"></div>
    </article>
  );
}
