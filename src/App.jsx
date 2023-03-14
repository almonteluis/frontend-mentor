import { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";
import Summary from "./components/Summary";
import Attribution from "./components/Attribution";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [averageScore, setaverageScore] = useState(0);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log(response.data);
        setData(response.data);

        const scores = response.data.map((item) => item.score);
        const sum = scores.reduce((a, b) => a + b, 0);
        const average = Math.round(sum / scores.length);
        setaverageScore(average);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <ResultCard title={"Your Results"} score={averageScore} />
        <Summary data={data} />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
