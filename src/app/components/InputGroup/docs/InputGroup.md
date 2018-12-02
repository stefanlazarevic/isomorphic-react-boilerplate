# InputGroup

Form input grouper.

## When to use?

- When you need to use button with input as one element.
- When you need to use icon with input.

## Usage

```js
import { InputGroup } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `children` | Content of InputGroup component. | `node` | `false` | - | - |


### Examples

```js
import { InputGroup, InputGroupAddon, Input } from '@components';

<InputGroup>
  <InputGroupAddon position="prepend">
    <span>https://</span>
  </InputGroupAddon>
  <Input placeholder="Hello World" />
</InputGroup>
```

<!-- STORY -->

<br />
