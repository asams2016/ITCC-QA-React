import React from 'react';
import ReactDOM from 'react-dom';
import AboutSplunkPage from '../AboutSplunkPage';
import store from '../../../redux/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutSplunkPage store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
