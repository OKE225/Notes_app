import { useEffect, useState } from "react";

const App = () => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => setFetchData(data.message));
  }, []);

  return (
    <div className="text-5xl font-bold bg-rose-500 text-white p-10">
      {fetchData ? fetchData : "SERVER CONNECTION ERROR"}
    </div>
  );
};

export default App;
