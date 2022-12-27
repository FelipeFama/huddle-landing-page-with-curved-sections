import React from "react";
import flowing from "/images/illustration-flowing-conversation.svg";
import "../../../styles/infos/secondinfo.sass";

export default function SecondInfo() {
  return (
    <article className="flowing-content">
      <figure>
        <img src={flowing} alt="illustration flowing" />
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
