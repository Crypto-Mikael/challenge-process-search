import SearchComponent from "./search/SearchComponent";
import styles from "./Home.module.css"

export default function HomeComponent() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <header>
          <h1 className={styles.h1}>Buscar</h1>
          <h4 className={styles.h4}>
            Selecione um tribunal para listar os processos ou buscar pelo número
            unificado
          </h4>
        </header>
        <SearchComponent></SearchComponent>
      </section>
    </main>
  );
}
