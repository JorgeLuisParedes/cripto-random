import "./App.css";
import { useRanDom } from "./hooks/useRandom";

export const App = () => {
  const query = useRanDom();

  return (
    <>
      {query.isFetching ? (
        <h2>Cargando...</h2>
      ) : (
        <h2>Número aleatorio: {query.data}</h2>
      )}

      {!query.isFetching && query.isError && <h3>{`${query.error}`}</h3>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "..." : "Nuevo número"}
      </button>
    </>
  );
};
