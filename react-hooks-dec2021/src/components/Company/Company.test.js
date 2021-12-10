import React from 'react'; // needed
import ReactDOM from 'react-dom'; //needed
import Company from './Company';
import { render, cleanup, fireEvent } from '@testing-library/react'; // from react testing lib 
import renderer from 'react-test-renderer';

afterEach(cleanup); // we can cleanup the tests using after each


// group of related tests -- test cases
describe('company component', () => {

  it('renders the company comp properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Company/>, div);
  });

  it('should display the prop correctly', () => {
    // take the element to put under test
    const { getByTestId } = render( <Company companyName='Twitter'></Company>);
    // fetching the element by companyEl; // refer Company.js 
    // checking if props are received correctly
    expect(getByTestId('companyEl')).toHaveTextContent('Twitter');// companyEl is the test id of the element
  });

  //finally let's focus on snapshot testing
  it('should have right company comp snapshot', () => {
    const tree = renderer.create(<Company name='Facebook'></Company>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });

});