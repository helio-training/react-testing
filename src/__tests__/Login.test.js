import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Login from '../Login';

describe('<Login>', () => {
  it('has a login button', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.containsMatchingElement(<button type="submit">Login</button>)).to.be.true;
  });

  it('has a email input field', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.containsMatchingElement(<input type="email" />)).to.be.true;
  });

  it('has a password input field', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.containsMatchingElement(<input type="password" />)).to.be.true;
  });

  it('passes login information', () => {
    const email = 'tjgarlick@gmail.com';
    const password = '123password';
    const wrapper = shallow(<Login handleLogin={state => {
      expect(state.email).to.be.equal(email);
      expect(state.password).to.be.equal(password);
    }}/>);
    wrapper.setState({ email: 'tjgarlick@gmail.com', password: '123password'});
    wrapper.find('button').simulate('click');
  });
});