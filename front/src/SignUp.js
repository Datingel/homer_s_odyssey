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
      flash: '',
    };
    this.updateInputForm = this.updateInputForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  updateInputForm(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmitForm(e) {
    e.preventDefault();

    fetch('/auth/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(res => this.setState({flash: res.flash}), err => this.setState({flash: err.flash}));
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

          <input
            className='submitButton'
            type='submit'
            value='Submit'
            onClick={this.handleSubmitForm}
          />
          <input className='resetButton' type='submit' value='Reset' onClick={this.state} />
        </form>
      </div>
    );
  }
}

export default SignUp;
