import style from './HeaderComponent.module.css';

export default function HeaderCourtComponent() {
  return (
  <header className={style.header}>
    <h1 className={style.h1}>Busca Por Tribunal</h1>
    <h4 className={style.h4}>Selecione um tribunal para listar os processos</h4>
  </header>
  )
}