import styles from "./form.module.css";
import { useState } from "react";
function Table(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [interest, seInterest] = useState("");
  const [duration, setDuration] = useState("");
  function currentSavingsChangeHandler(event) {
    setCurrentSavings(event.target.value);
    // console.log(event.target.value);
  }
  function yearlySavingsChangeHandler(event) {
    setYearlySavings(event.target.value);
    // console.log(event.target.value);
  }
  function interestChangeHandler(event) {
    seInterest(event.target.value);
    // console.log(event.target.value);
  }
  function durationChangeHandler(event) {
    setDuration(event.target.value);
    // console.log(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const dataObj = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      interest: interest,
      duration: duration,
    };
    props.dataGetter(dataObj);
    // console.log(dataObj);
    setDuration("");
    setCurrentSavings("");
    setYearlySavings("");
    seInterest("");
  }
  function resetClickHandler() {
    props.resetter();
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.inputBox}>
          <div>
            <label>Current Savings($)</label>
            <input
              type="text"
              name="currentSavings"
              onChange={currentSavingsChangeHandler}
              value={currentSavings}
            />
          </div>
          <div>
            <label>Yearly Savings($)</label>
            <input
              type="text"
              name="yearlySavings"
              onChange={yearlySavingsChangeHandler}
              value={yearlySavings}
            />
          </div>
        </div>
        <div className={styles.inputBox}>
          <div>
            <label>Expected Interest (%, per year)</label>
            <input
              type="text"
              name="interest"
              onChange={interestChangeHandler}
              value={interest}
            />
          </div>
          <div>
            <label>Investment Duration(Years)</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={durationChangeHandler}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={resetClickHandler} className={styles.btnReset}>
            Reset
          </button>
          <button className={styles.button} type="submite">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Table;
