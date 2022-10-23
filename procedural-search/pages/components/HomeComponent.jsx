import { useState } from "react";
import searchEnum from '../../helpers/searchEnum';
import HeaderComponent from "./header/HeaderComponent";
import style from "./Home.module.css"
import SearchComponent from "./search/SearchComponent";
import SearchTypeComponent from "./search/SearchTypeComponent";


export default function HomeComponent() {
  const { BY_PROCESS, BY_COURT } = searchEnum;
  const [typeSearch, setTypeSearch] = useState(BY_COURT);

  return (
    <main className={style.main}>
      <section>
        <SearchTypeComponent
          setTypeCourt={() => setTypeSearch(BY_COURT)}
          setTypeProcess={() => setTypeSearch(BY_PROCESS)}
        />
        <section className={style.section}>
          <HeaderComponent typeSearch={typeSearch} />
          <SearchComponent typeSearch={typeSearch} />
        </section>
      </section>
    </main>
  );
}
