import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';

import { InputGroup, InputGroupAddon, Input } from '@components';
import { XMark } from '@icons/Mark';

import InputGroupDocumentation from './InputGroup.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['InputGroup'] })
  .add(
    'InputGroup',
    storyPreview(InputGroupDocumentation, () => {
      return (
        <Fragment>
          <InputGroup>
            <InputGroupAddon position="prepend">
              <span>Hello</span>
            </InputGroupAddon>
            <Input name="message" placeholder="Hello World" />
          </InputGroup>

          <br />

          <InputGroup>
            <Input name="message" placeholder="Hello World" />
            <InputGroupAddon position="append">
              <button>Hello</button>
            </InputGroupAddon>
          </InputGroup>

          <br />

          <InputGroup>
            <Input name="message" placeholder="Hello World" />
            <InputGroupAddon position="append">
              <span>Hello</span>
            </InputGroupAddon>
            <InputGroupAddon position="append">
              <button>Button</button>
            </InputGroupAddon>
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroupAddon position="prepend">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
            <InputGroupAddon position="prepend">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
            <InputGroupAddon position="prepend">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
            <Input name="message" placeholder="Hello World" />
            <InputGroupAddon position="append">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
            <InputGroupAddon position="append">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
            <InputGroupAddon position="append">
              <XMark width="35" height="33" stroke="#000" />
            </InputGroupAddon>
          </InputGroup>
        </Fragment>
      );
    })
  );
