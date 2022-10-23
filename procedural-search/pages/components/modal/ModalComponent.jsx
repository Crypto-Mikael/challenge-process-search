import style from "./ModalComponent.module.css";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import { useState } from "react";

export default function ModalComponent({ court, onClose }) {
  const { data, error } = useSWR("/api/process", fetcher);
  const [filtro, setfiltro] = useState("");

  function applyFilterToSearchProcess() {
    const processWithCourtFilter = data.filter(({ courtOfOrigin }) => courtOfOrigin === court);
    if (filtro) {
      return processWithCourtFilter.filter(
        ({ cnjNumber, startDate, nameOfTheParts }) =>
          cnjNumber.replace(/[^0-9]/g, "").startsWith(filtro) ||
          startDate.includes(filtro) ||
          nameOfTheParts.author.includes(filtro) ||
          nameOfTheParts.defendant.includes(filtro)
      );
    } 
    return processWithCourtFilter; 
  }
  return (
    <main className={style.main} onClick={onClose}>
      <div className={style.section} onClick={(e) => e.stopPropagation()}>
        <header className={style.header}>
          <input
            className={style.input}
            value={filtro}
            onChange={({ target }) => setfiltro(target.value)}
            type="text"
            placeholder="Buscar por processo, data, autor ou reú"
          ></input>
        </header>
        <section className={style.body}>
          {!error &&
            data &&
            applyFilterToSearchProcess().map((process, index) => (
              <article key={index} className={style.article}>
                <div>
                  <h1 className={style.h1}>{process.cnjNumber}</h1>
                  <h4 className={style.h4}>{process.startDate}</h4>
                </div>
                <div className={style.div}>
                  <h5 className={style.h5}>
                    Autor: {process.nameOfTheParts.author}{" "}
                  </h5>
                  <h5 className={style.h5}>
                    Reú: {process.nameOfTheParts.defendant}{" "}
                  </h5>
                </div>
              </article>
            ))}
        </section>
        <footer className={style.footer}></footer>
      </div>
    </main>
  );
}
