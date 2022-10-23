import SearchByProcessComponent from "./SearchByProcessComponent";
import SearchByCourtComponent from "./SearchByCourtComponent";
import searchEnum from "../../../helpers/searchEnum";


export default function SearchComponent({ typeSearch }) {
  const { BY_PROCESS } = searchEnum;

  function selectTypeOfSearch() {
    if (typeSearch === BY_PROCESS) {
      return <SearchByProcessComponent />;
    } else {
      return <SearchByCourtComponent />;
    }
  }

  return selectTypeOfSearch();
}
