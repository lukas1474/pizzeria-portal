import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

// const select = {
//   title: 'title',
// };

// const mockProps ={
//   title: 'Login view',
// };

describe('Component Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<Login />);

    expect(component).toBeTruthy();
  });

  // it('should be render props: title', () => {
  //   const component = shallow(<Login {...mockProps} />);

  //   expect(component.exists(select.title)).toEqual(true);
  // });
});
