import React from "react";
import TableItem from "./TableItem";

export default class  Table extends React.Component{
  constructor(props){
    super(props)
    this.state={
      filter:"all",
      sort:null
    }
  }
  handleFilterChange=(e)=>{
const {name,value}=e.target
this.setState({
[name]:value
})
  }
  render(){
    const {data}=this.props
    const {filter,sort}=this.state
  return (
    <>
    <div>
      <select 
      name="filter"
      value={filter}
       onChange={this.handleFilterChange}>
        {['nonremote','remote','all'].map(item=>
        <option value={item} key={item}>{item}</option>)}
        </select>

      </div>
      <div>
        Sort By Dates<br/>
      <select 
      name="sort"
      value={sort}
       onChange={this.handleFilterChange}>
        {['all','asc','desc'].map(item=>
        <option value={item} key={item}>{item}</option>)}
        </select>

      </div>
    <table>
      <tr>
      
       
      </tr>
     
      {data?.filter(item=>{
        if(filter==="all"){
          return true
        }
        return filter===item.remotework
      })
      .sort((a,b)=>{
        
      if(sort==='null'){
        return 0
      }
      if(sort ==='asc'){
        return new Date(a.date) - new Date(b.date)
      }
      else if(sort==='desc'){
        return new Date(b.date) - new Date(a.date) 
      }
      })
      .sort((a,b)=>{
       return b.salary-a.salary
      })
      .map((item) => (
        <tr >
            
          <TableItem 
           key={item.id}
          
          {...item}
         
           />
        </tr>
      ))}
    </table>
    </>
  );
      }
}