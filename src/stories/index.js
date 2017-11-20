import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../App';
import Cuisine from '../cuisines/Cuisine';
import Cuisines from '../Cuisines';
import Restaurant from '../Restaurant';
import Vote from '../Vote';


storiesOf('Restaurant', module)
  .add('test', () => (
    <div>
      <Restaurant />
      <Vote />
    </div>
  ))
