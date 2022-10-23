import { useRouter } from "next/router";
import { useState } from "react";
import style from "./SearchComponent.module.css";

export default function SearchByCourtComponent() {
  const router = useRouter();
  const [processNumber, setProcessNumber] = useState("");
  function searchProcess() {
    router.push(`/${processNumber}`);
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
      <button className={style.button} onClick={searchProcess}>
        BUSCAR
      </button>
    </section>
  );
}
