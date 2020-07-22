/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ListExperiences from './ListExperiences';
import * as user from '../../../resources/myProfile.json';


it('renders ListExperiences without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListExperiences userExperiences={user.work} />, div);
  ReactDOM.unmountComponentAtNode(div);
});