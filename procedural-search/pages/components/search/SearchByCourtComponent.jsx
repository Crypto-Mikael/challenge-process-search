import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import ModalComponent from "../modal/ModalComponent";
import style from "./SearchComponent.module.css";

export default function SearchByProcessComponent() {
  const { data, error } = useSWR("/api/courts", fetcher);
  const [courtSelected, setCourt] = useState("STF");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
        <button className={style.button} onClick={() => setShowModal(true)}>
          BUSCAR
        </button>
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
