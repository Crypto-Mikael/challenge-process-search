import style from './SearchComponent.module.css';

export default function SearchTypeComponent({ setTypeCourt, setTypeProcess }) {
  return (
    <section className={style.sectionNavBar}>
      <button className={style.button} onClick={setTypeCourt}>
        POR TRIBUNAL
      </button>
      <button className={style.button} onClick={setTypeProcess}>
        POR NUMERO DO PROCESSO
      </button>
    </section>
  );
}