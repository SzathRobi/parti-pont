import Image from "next/image";
import styles from "./landing.module.scss";

function Lanidng() {
  return (
    <div className={styles.landing}>
      <div className={styles.img_container}>
        <Image src="/imgs/ananas.png" layout="fill" />
      </div>
      <article>
        <h1>Készen állsz a partira?!</h1>
        <h2>
          Fedezd fel az alkalomhoz illő parti kellékeinket! Itt mindent
          megtalálsz.
        </h2>
        <button className="btn">IRÁNY A BOLT</button>
      </article>
    </div>
  );
}

export default Lanidng;
