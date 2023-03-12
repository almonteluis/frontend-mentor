import { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";
import Summary from "./components/Summary";
import Attribution from "./components/Attribution";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <ResultCard title={"Your Results"} />
        <Summary data={data} />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
