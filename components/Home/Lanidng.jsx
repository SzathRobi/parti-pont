import Image from "next/image";
import styles from "./landing.module.scss";

function Lanidng() {
  return (
    <div className={styles.landing}>
      <div className={styles.img_container}>
        <Image src="/imgs/ananas.png" layout="fill" objectFit="cover" />
      </div>
      <article>
        <h1>Készen állsz a partira?!</h1>
        <p>
          Fedezd fel az alkalomhoz illő parti kellékeinket! Itt mindent
          megtalálsz.
        </p>
        <button className="btn">IRÁNY A BOLT</button>
      </article>
    </div>
  );
}

export default Lanidng;
