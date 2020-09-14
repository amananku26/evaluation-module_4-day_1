import React from "react";
import Form from './Form'
import {v4 as uuid} from 'uuid';
import Table from "./Table";
import styles from './FormW.module.css'
export default class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      title: "",
     salary:'',
     companyname:'',
   locationjob:'',
   remotework:false,
  
   date:'',
    };
    
  }
  onChange=e=>{
    const {name,type,value,checked}=e.target
    const val=type==='checkbox'?checked:value
    this.setState({
[name]:val
    })
  }
 
 handleSubmit=(e)=>{
e.preventDefault()
const {data,...formState}=this.state
const newData=[...data, {...formState,id:uuid()}]  
this.setState({
data:newData
})
 }



  render() {
    const {data,...formState}=this.state

    
console.log(formState)

    return (
    <div className={styles.parent} >
     
        <Form onSubmit={this.handleSubmit} >
        <img src={data.file} alt={data.title}/> <br/>
          <label>
           Title 
           <input
            className={styles.input}
            value={data.title} 
            name="title"
            type="text" 
            onChange={this.onChange} />
          </label>
          <label className={styles.left}>
          Salary:
            <input 
            
             value={data.salary}
             name="salary" 
             type="number"
              onChange={this.onChange} />
          </label>
          <br />
          <label>
            Company Name:
            <input 
            className={styles.input}
             value={data.companyname} 
             name="companyname" 
             type="text"
              onChange={this.onChange} />
          </label>
          <label  className={styles.left}>
           Joblocation:
            <input 
           
             value={data.locationjob}
              name="locationjob" 
              type="text" 
              onChange={this.onChange} />
          </label>
          <br />
          <label>
            Remote:
            <input 
            className={styles.input}
             value={data.remotework} 
             type="checkbox"
              name="remotework" 
              onChange={this.onChange} />
          </label>
          <label>
            Date:{" "}
            <input
             className={styles.input}
              value={data.date} 
              type="date" 
              name="date" 
              onChange={this.onChange} />
          </label><br/>
          <input 
          className={styles.btn}
          type="submit"
           value="SUBMIT" />
        </Form>
        
        <Table data={data} />
       
    </div>);
  }
}