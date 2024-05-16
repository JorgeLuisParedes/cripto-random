import "./App.css";
import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();
  //   throw new Error("Auxilio!!");
  return +numberString;
};

export const App = () => {
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumberFromApi,
  });

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
