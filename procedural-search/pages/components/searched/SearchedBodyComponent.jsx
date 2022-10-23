
import useSWR from "swr";
import { useRouter } from 'next/router';
import fetcher from "../../../helpers/fetcher";
import style from './SearchedBodyComponent.module.css';

export default function SearchedBodyComponent({ setFound }) {
  const router = useRouter();
  const { cnjNumber } = router.query;
  const { data, error } = useSWR([`/api/process/${cnjNumber}`], fetcher);
  if (data) setFound();
  return (
    !error &&
    data && (
      <div  className={style.body}>
        <header>
          <h1 className={style.h1}>
            Processo n. {cnjNumber} do {data.courtOfOrigin}
          </h1>
          <h4 className={style.h4}>Distribuído em {data.startDate}</h4>
        </header>
        <main className={style.main}>
          <section className={style.section}>
            <header className={style.header}>
              <h3 className={style.h3}>Movimentações</h3>
            </header>
            {data.movements.map(({ description, date }, i) => (
              <article key={i} className={style.article}>
                <p className={style.date}>{date}</p>
                <p className={style.p}>{description}</p>
              </article>
            ))}
          </section>
          <aside className={style.aside}>
            <article>
              <h4>Detalhes do processo</h4>
            </article>
            <article>
              <h4>Partes envolvidas</h4>
              <a href="" className={style.a}>
                {data.nameOfTheParts.author}
              </a>
              <p className={style.pC}>Parte envolvida • Exequente</p>
              <a href="" className={style.a}>
                {data.nameOfTheParts.defendant}
              </a>
              <p className={style.pC}>Parte envolvida • Apelante</p>
              {data.nameOfTheParts.lawyers.map(({ name, oab }, i) => (
                <div key={i}>
                  <a href="" className={style.a}>
                    {name}
                  </a>
                  <p className={style.pC}>Advogado envolvido • {oab} </p>
                </div>
              ))}
            </article>
          </aside>
        </main>
      </div>
    )
  );
}