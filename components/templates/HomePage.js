import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Definition from "../modules/Definition";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
