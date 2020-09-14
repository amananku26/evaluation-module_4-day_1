import React from "react";


export default class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      title: '',
     salary:'',
     companyname:'',
   locationjob:'',
   remote:false,
    logo:'',
    date:''
     
    };
    
  }
  render(){
    const {onSubmit}=this.props
return(
  <>
  <form onSubmit={onSubmit}>
    {this.props.children}
    </form>
  </>
)
  }
}