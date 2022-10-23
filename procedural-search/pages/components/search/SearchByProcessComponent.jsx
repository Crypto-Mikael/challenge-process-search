import { useState } from "react";
import style from './SearchComponent.module.css';

export default function SearchByCourtComponent() {
  const [processNumber, setProcessNumber] = useState("");
  function searchListOfProceses() {
    console.log(processNumber);
  }

  return (
      <section className={style.section}>
        <label>
          <input
            value={processNumber}
            onChange={({ target }) => setProcessNumber(target.value)}
            type="text"
            placeholder="Número de processo"
          />
        </label>
        <button className={style.button} onClick={searchListOfProceses}>BUSCAR</button>
      </section>
  );
}
