import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.phone;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
    else{
      alert("Thanks")
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div> 
      <form onSubmit={this.mySubmitHandler}>
      <h1>Sign Up</h1>
      <p>Name</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
        
      />
      <p>EmailID</p>
      <input
        type='text'
        name='emailid'
        onChange={this.myChangeHandler}
      />
      <p>PhoneNumber</p>
      <input
        type='text'
        name='phone'

        onChange={this.myChangeHandler}
      />
      <p>Password</p>
      
      <input
        type='text'
        name='password'
        onChange={this.myChangeHandler}
      />
      <p>Gender</p>
      <select>
  <option selected value="grapefruit">Male</option>
  <option value="lime">Female</option>
  <option value="coconut">Others</option>
</select>
      <br/>
      <br/>
      
      <button>Sign Up</button>
      </form>
      <form>
      <h5>Have an Account</h5>
      <button>Log In</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm