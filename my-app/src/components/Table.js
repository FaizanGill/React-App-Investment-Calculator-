import styles from "./table.module.css";

function Table(props) {
  let dataRows;
  props.dataSet.length === 0
    ? (dataRows = <p>No data found</p>)
    : (dataRows = (
        <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.dataSet.map(function (record) {
              return (
                <tr key={record.year}>
                  <td>{record.year}</td>
                  <td>{record.totalSavings}</td>
                  <td>{record.interest}</td>
                  <td>{record.totalInterest}</td>
                  <td>{record.investedCapital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ));
  return <div className={styles.dataRow}>{dataRows}</div>;
}

export default Table;
