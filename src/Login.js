import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.props.handleLogin) {
      this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e => this.setState({ email: e.target.value})} />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => this.setState({ password: e.target.value})} />
        </fieldset>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    )
  }

}