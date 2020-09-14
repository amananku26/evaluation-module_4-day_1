import React from "react";
import styles from './FormW.module.css'

export default class TableItem extends React.Component {
  constructor(props) {
    super(props);
   this.state={}
  } 
render(){
  const {title,salary,
    companyname,locationjob,
    remotework,
    date,
  }=this.props
  return (
    <>
    
    <div className={styles.table}>
      <ul>
        <td>Job Posting</td>
      </ul>
      <ul>
      <td ><li>{title}</li></td>
      <td className={styles.td} >&#x20B9;{salary}</td>
      <td>{companyname}</td>
      <td>{locationjob}</td>
      <td>{date}</td>
      <td>{remotework  ? "remote" : "nonremote"}</td>
      </ul>
    </div>
    </>
  );
}
}