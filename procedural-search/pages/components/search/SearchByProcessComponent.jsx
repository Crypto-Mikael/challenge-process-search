import { useState } from "react";
import style from './SearchComponent.module.css';

export default function SearchByCourtComponent() {
  const [processNumber, setProcessNumber] = useState("");
  function searchListOfProceses() {
    console.log(processNumber);
  }

  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Busca Por Numero do Processo</h1>
        <h4 className={style.h4}>Digite o numero do processo para lista-lo</h4>
      </header>
      <section className={style.section}>
        <label>
          <input
            value={processNumber}
            onChange={({ target }) => setProcessNumber(target.value)}
            type="text"
            placeholder="Número de processo"
          />
        </label>
        <button onClick={searchListOfProceses}>BUSCAR</button>
      </section>
    </>
  );
}
