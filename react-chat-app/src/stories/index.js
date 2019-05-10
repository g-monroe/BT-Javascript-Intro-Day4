import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import { withKnobs, text, number } from '@storybook/addon-knobs';

const welcomeStories = storiesOf('Example | Welcome', module)
.add('Welcome Name', () =>
(<>
    <h2>Welcome {text("Name", "Daric")}</h2>
    <div>Age: {number("Age", 12)}</div>
  </>));
welcomeStories.addDecorator(withKnobs);

storiesOf('Example | Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () =>
    (<Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>));

