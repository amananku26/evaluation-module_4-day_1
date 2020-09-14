import React, { Component } from 'react'
import styles from './Login.module.css'


class Login extends Component{
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      username: "",
      password: "",
      loggedIn
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    const { username, password } = this.state;
    console.log(this.state)
    console.log(username)
    console.log(password)
    event.preventDefault();
    fetch('https://reqres.in/api/users?page=1')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    console.log(json.data[1].email)
  })
  };
render(){
  return (
    <div className={styles.outer}>
        <h5>Make Login / Register</h5>
         <hr/>
         <form onSubmit={e => this.handleSubmit(e)}>
           Username:
          <input
            className={styles.user}
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br/>
           Password: 
          <input
            className={styles.pass}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br/>
          <button type="submit"
           className={styles.btn}>Login</button>
        </form>
    </div>
  )
}
}


export default Login