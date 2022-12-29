import "./style.sass";
import { assetsProject } from "../../utils/data";

export default function Header() {
  return (
    <header>
      <figure>
        <img
          src={assetsProject.header.logo.source}
          alt={assetsProject.header.logo.alt}
        />
      </figure>
      <button>Try it free</button>
    </header>
  );
}
