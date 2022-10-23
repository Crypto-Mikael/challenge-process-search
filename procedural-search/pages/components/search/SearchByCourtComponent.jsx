import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import ModalComponent from "../modal/ModalComponent";
import style from "./SearchComponent.module.css";

export default function SearchByProcessComponent() {
  const { data, error } = useSWR('/api/courts', fetcher);
  const [courtSelected, setCourt] = useState("STF");
  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Busca Por Tribunal</h1>
        <h4 className={style.h4}>
          Selecione um tribunal para listar os processos
        </h4>
      </header>
      <section className={style.section}>
        <label>
          <select
            value={courtSelected}
            onChange={({ target }) => setCourt(target.value)}
            type="text"
            placeholder="Tribunal"
          >
            {!error &&
              data &&
              data.map((court, i) => (
                <option key={i} value={court.initials}>
                  {`${court.name} - ${court.initials}`}
                </option>
              ))}
          </select>
        </label>
        <button onClick={() => setShowModal(true)}>BUSCAR</button>
      </section>
      {showModal && (
        <ModalComponent
          onClose={() => setShowModal(false)}
          court={courtSelected}
        />
      )}
    </>
  );
}
