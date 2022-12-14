import HeaderCourtComponent from "./HeaderCourtComponent";
import HeaderProcessComponent from "./HeaderProcessComponent";
import searchEnum from "../../../helpers/searchEnum";


export default function HeaderComponent({ typeSearch }) {
  const { BY_PROCESS } = searchEnum;

  function selectTypeOfHeader() {
    if (typeSearch === BY_PROCESS) {
      return <HeaderProcessComponent />;
    } else {
      return <HeaderCourtComponent />;
    }
  }
  return selectTypeOfHeader();
}