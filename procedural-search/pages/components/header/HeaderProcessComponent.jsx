import style from './HeaderComponent.module.css';

export default function HeaderProcessComponent() {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>Busca Por Processo</h1>
      <h4 className={style.h4}>
        Digite o processo para acha-lo
      </h4>
    </header>
  );
}
