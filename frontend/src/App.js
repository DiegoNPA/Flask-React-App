import React, { Component } from 'react';
import './App.css';
import { Signup } from './Components/Signup';


class App extends Component {
  // state = {
  //   email: "",
  //   password: "",
  //   emailAnswer: "",
  //   passwordAnswer: ""
  // }

  // componentDidMount() {
    
  // }

  // handleChange = (event) => {
  //   this.setState({email: event.target.value});
  // }

  // handleChange2 = (event) => {
  //   this.setState({password: event.target.value});
  // }

  // handleSubmit = (event) => {
  //   this.fetchAnswer();
  //   event.preventDefault();
  // }
  

  // fetchAnswer = async () => {
  //   const headers = {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'
  //   }
  //   const { email, password } = this.state;
  //   const { data } = await axios.post(
  //     `http://127.0.0.1:8080/api/verify_email`, { email, password }, { headers: headers }
  //   );
  //   const { emailAnswer, passwordAnswer } = data;
  //   this.setState({emailAnswer})
  //   this.setState({passwordAnswer})
  // }

  render() {
    // const { email, password, emailAnswer, passwordAnswer } = this.state;
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Email:
      //       <input type="text" value={email} onChange={this.handleChange} />
      //     </label>
      //     <br/>
      //     <label>
      //       Password:
      //       <input type="text" value={password} onChange={this.handleChange2} />
      //     </label>
      //     <br/>
      //     <input type="submit" value="Submit" />
      //   </form>
      //   <h1>{emailAnswer}<br/>{passwordAnswer}</h1>
      //   </header>
      // </div>

      <div className="container m-3">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

export default App;