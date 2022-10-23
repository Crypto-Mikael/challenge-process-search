import { useState } from "react";
import searchEnum from '../../helpers/searchEnum';
import SearchByCourtComponent from "./search/SearchByCourtComponent";
import styles from "./Home.module.css"
import SearchByProcessComponent from "./search/SearchByProcessComponent";

export default function HomeComponent() {
  const { BY_PROCESS, BY_COURT } = searchEnum;
  const [tipoDePesquisa, setTipoDePesquisa] = useState(BY_COURT);

  function selectTypeOfSearch() {
    if (tipoDePesquisa === BY_PROCESS) {
      return <SearchByProcessComponent></SearchByProcessComponent>
    } else {
      return <SearchByCourtComponent></SearchByCourtComponent>;
    }
  }

  return (
    <main className={styles.main}>
      <section>
        <section>
          <button onClick={() => setTipoDePesquisa(BY_COURT)}>
            POR TRIBUNAL
          </button>
          <button onClick={() => setTipoDePesquisa(BY_PROCESS)}>
            POR NUMERO DO PROCESSO
          </button>
        </section>
        <section className={styles.section}>
          { selectTypeOfSearch() }
        </section>
      </section>
    </main>
  );
}
