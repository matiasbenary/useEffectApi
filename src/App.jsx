import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => response.json())
    //   .then((info) => {
    //     setData(info);
    //   });

    // axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    //   setData(response.data);
    // });

    const getInfo = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setData(response.data);
    };

    getInfo();
  }, []);
  return (
    <div>
      {data &&
        data.results.map((result) => {
          return (
            <div>
              <img src={result.image} alt="" /> <h3>{result.name}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
