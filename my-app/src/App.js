import Table from "./components/Table";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [finalObj, setFinalObj] = useState("");
  // const [finalYearlyData, setFinalYearlyData] = useState();
  function getData(dataObj) {
    setFinalObj({
      currentSavings: +dataObj.currentSavings,
      yearlySavings: +dataObj.yearlySavings,
      interest: +dataObj.interest,
      duration: +dataObj.duration,
    });
  }
  let yearlyData = [];
  if (finalObj !== "") {
    let currentSavings = finalObj.currentSavings;
    const yearlySavings = finalObj.yearlySavings;
    const interest = finalObj.interest;
    // let totalSavings = currentSavings;
    let totalInterest = 0;
    let investedAmount = currentSavings;
    const duration = finalObj.duration;
    for (let i = 0; i < duration; i++) {
      const yearlyinterest = (currentSavings / 100) * interest;
      totalInterest += yearlyinterest;
      currentSavings += yearlyinterest + yearlySavings;
      investedAmount += yearlySavings;
      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        interest: yearlyinterest,
        totalInterest: totalInterest,
        investedCapital: investedAmount,
      });
    }
  }
  // console.log(yearlyData);

  function resetFunction() {
    setFinalObj("");
  }

  return (
    <div className="main_container">
      <div>
        <Header />
      </div>
      <div>
        <Form dataGetter={getData} resetter={resetFunction} />
      </div>
      <div>
        <Table dataSet={yearlyData} />
      </div>
    </div>
  );
}

export default App;
