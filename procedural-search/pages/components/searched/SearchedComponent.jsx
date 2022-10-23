import SearchComponent from "../search/SearchComponent";
import SearchTypeComponent from "../search/SearchTypeComponent";
import style from './SearchedComponent.module.css';
import searchEnum from "../../../helpers/searchEnum";
import { useState } from "react";
import SearchedBodyComponent from "./SearchedBodyComponent";

export default function SearchedComponent() {
  const { BY_COURT, BY_PROCESS } = searchEnum
  const [typeSearch, setTypeSearch] = useState(BY_COURT);
  const [found, setFound] = useState(false);
  return (
    <>
      <main className={style.main}>
        <nav className={style.nav}>
          <SearchTypeComponent
            setTypeCourt={() => setTypeSearch(BY_COURT)}
            setTypeProcess={() => setTypeSearch(BY_PROCESS)}
          />
          <SearchComponent typeSearch={typeSearch} />
        </nav>
        <SearchedBodyComponent setFound={() => setFound(true)} />
      </main>
      {!found && <h1 className={style.h1}>Processo não localizado</h1>}
    </>
  );
}
