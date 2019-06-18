import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repassword: '',
    };
    this.updateInputForm = this.updateInputForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateInputForm(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form className='formInput' onSubmit={this.submitForm}>
          <div>
            <label>First name: </label>
            <input type='text' name='firstname' onChange={this.updateInputForm} />
          </div>
          <div>
            <label>Last name: </label>
            <input type='text' name='lastname' onChange={this.updateInputForm} />
          </div>
          <div>
            <label>Email: </label>
            <input type='email' name='email' onChange={this.updateInputForm} />
          </div>
          <div>
            <label>Password: </label>
            <input type='password' name='password' onChange={this.updateInputForm} />
          </div>
          <div>
            <label>Repeat your Password: </label>
            <input type='password' name='repassword' onChange={this.updateInputForm} />
          </div>

          <input className='submitButton' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
