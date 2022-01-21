import Image from "next/image";
import styles from "../../styles/analyticPlataform.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faCog,
  faUser,
  faBell,
  faOutdent,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Emoji from "../assets/tokEmoji.png";

import dynamic from "next/dynamic";

const MyChart = dynamic(() => import("../graficos/componentsMyChart.js"), {
  ssr: false,
});

const Grafico2 = dynamic(() => import("../graficos/grafico2.js"), {
  ssr: false,
});

const Grafico3 = dynamic(() => import("../graficos/grafico3.js"), {
  ssr: false,
});

const Grafico4 = dynamic(() => import("../graficos/graficoLinear.js"), {
  ssr: false,
});

export default function AnalyticPlataform() {
  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Analytics</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <FontAwesomeIcon icon={faHome} className="icon" />

            <p>Home</p>
          </li>

          <li className={styles.li}>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <p>Activity</p>
          </li>

          <li className={styles.li}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p>Users</p>
          </li>

          <li className={styles.li}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            <p>Settings</p>
          </li>

          <li className={styles.lii}>
            <FontAwesomeIcon icon={faOutdent} className="icon" />
            <p>Log out</p>
          </li>
        </ul>
      </div>
      <div className={styles.div2}>
        <article className={styles.article1}>
          <h1 className={styles.h1hello}>Hello, Alisha Chef</h1>

          <div className={styles.containerImage}>
            <Image
              src={Emoji}
              alt=""
              className={styles.image}
              width={30}
              height={30}
            />
          </div>

          <input
            type="search"
            placeholder="Search"
            className={styles.search}
          ></input>

          <div className={styles.containerIcon}>
            <FontAwesomeIcon icon={faBell} className={styles.icon} />
          </div>
        </article>

        <article className={styles.article2}>
          <ul>
            <li>Graph Design</li>
            <li className={styles.listaPercentage}>48,32%</li>
            <li className={styles.linePercentage}></li>
          </ul>

          <ul>
            <li>UX Design</li>
            <li className={styles.listaPercentage}>81,43%</li>
            <li className={styles.linePercentage}></li>
          </ul>

          <ul>
            <li>UI Design</li>
            <li className={styles.listaPercentage}>81,43%</li>
            <li className={styles.linePercentage}></li>
          </ul>

          <ul>
            <li>Ilustration</li>
            <li className={styles.listaPercentage}>25,42%</li>
            <li className={styles.linePercentage}></li>
          </ul>
        </article>

        <article className={styles.article3}>
          <MyChart />
        </article>

        <article className={styles.article4}></article>
      </div>
      <div className={styles.div3}>
        <h1 className={styles.h1Activity}>Activicty Statistics</h1>
        <ul className={styles.ul1}>
          <p className={styles.textDark}>
            Development by points:{" "}
            <span className={styles.textWhite}>3 directions used</span>
          </p>
          <Grafico2 />
        </ul>
        <ul className={styles.ul2}>
          <p className={styles.textDark}>
            Tested activity:{" "}
            <span className={styles.textWhite}>2 directions used</span>
          </p>
          <Grafico4 />
        </ul>
        <ul className={styles.ul3}>
          <p className={styles.textDark}>
            Last weeks progress:
            <span className={styles.textWhite}>4 directions used</span>
          </p>
          <Grafico3 />
          <button type="submit" className={styles.btn}>
            View more info
          </button>
        </ul>
      </div>
    </section>
  );
}
