import "./style.sass";
import { assetsProject } from "../../utils/data";

export default function Illustration() {
  return (
    <section className="illustration">
      <img
        src={assetsProject.illustration.mockups.source}
        alt={assetsProject.illustration.mockups.alt}
      />
    </section>
  );
}
