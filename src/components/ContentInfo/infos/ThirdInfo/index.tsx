import { assetsProject } from "../../../../utils/data";
import "./style.sass";

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
          <img
            src={assetsProject.contentInfo.users.source}
            alt={assetsProject.contentInfo.users.alt}
          />
        </figure>
      </div>
      <div className="bg-section-bottom-2"></div>
    </article>
  );
}
