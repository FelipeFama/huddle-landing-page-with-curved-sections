import "../../styles/modules/illustration.sass";
import mockups from "/images/screen-mockups.svg";

export default function Illustration() {
  return (
    <section className="illustration">
      <img src={mockups} alt="mockups" />
    </section>
  );
}
