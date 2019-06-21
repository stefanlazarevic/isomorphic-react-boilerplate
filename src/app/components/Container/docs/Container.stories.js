import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Container } from '@components';

import ContainerDocumentation from './Container.md';

storiesOf('Components|Layout', module)
  .addParameters({ jest: ['Container'] })
  .add(
    'Container',
    storyPreview(ContainerDocumentation, () => {
      return (
        <Container fluid={boolean('Fluid', false)}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio velit fugiat aliquam amet consequatur
            dicta? Velit aspernatur odit similique accusamus fugit dicta neque, exercitationem tenetur natus aut
            ex amet.
          </p>
        </Container>
      );
    })
  );
