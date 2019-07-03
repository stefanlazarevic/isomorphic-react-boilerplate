import React from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';

import { Accordion } from '@components';

import AccordionDocumentation from './Accordion.md';

storiesOf('Components|Layout', module)
  .addParameters({ jest: ['Accordion'] })
  .add(
    'Accordion',
    storyPreview(AccordionDocumentation, () => {
      return (
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Question one</Accordion.Header>
            <Accordion.Panel>
              <div>
                This is <strong>strong</strong> text.
              </div>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Question two</Accordion.Header>
            <Accordion.Panel>
              <div>
                This is <strong>strong</strong> text.
              </div>
              <a href="#">Yo</a>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    })
  );
