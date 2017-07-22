import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  // THIS METHOD IS MORE SUCCINCT, BUT IT WON'T PASS THE TESTS
  // handleOnChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleOnUsernameChange(event) {
  this.setState({
    username: event.target.value,
  });
}

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type='text' name='username' value={this.state.username} onChange={(event) => this.handleOnUsernameChange(event)} />
        <input type='text' name='hometown' value={this.state.hometown} onChange={(event) => this.handleOnHometownChange(event)} />
        <input type='submit' />
      </form>
    );
  }
};

export default UserInput;
