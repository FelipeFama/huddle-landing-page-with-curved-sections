import "../styles/components/illustration.sass";
import mockups from "../assets/images/screen-mockups.svg";

export default function Illustration() {
  return (
    <section className="illustration">
      <img src={mockups} alt="mockups" />
    </section>
  );
}
