# Testing in React

Testing comes by default with [JEST](https://facebook.github.io/jest/).  Jest is simply a test runner similar to mocha, ava, etc.  I installed the following packages to help test my new Login Component (Login.js).
  
  
```bash
npm i chai enzyme react-addons-test-utils react-scripts react-test-renderer -D
```
The two main libraries are: 

1. [Chai](http://chaijs.com/api/bdd/) - My assertion library, gives me the ability to write expect(true).to.be.true;
2. [Enzyme](http://airbnb.io/enzyme/) - React helper to render and test react components without rendering the whole application

---

## Login Component

I created a login component with email/password fields, a form and a submit button.
 
JEST being the test runner allows me to setup tests against my components in a describe / it format.

```js
describe('<Login />', () => {
  
  // You make up the tests that you want
  it('should do something cool', () => {
     // You assert in here your expectations using Chai
     expect(true).to.be.true;
  });
});
```

The create-react-app sets up nicely jest and gives you a sample test (App.test.js).  I prefer to move tests into the `__tests__` folder to separate out the my components from my tests.

Run jest using `npm test` or `yarn test`.


These are the tests I came up with.

```js
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

```

Enzyme allows me to 'render' a React component without actually starting up a browser.  Super handy for testing.

Using chai/enzyme combo you can create all sorts of combinations to facilitate testing in React.  It's that simple.