# Input

A basic widget for getting the user input.

## When to use?

- A user input in a form field is needed.
- A search input is required.


## Usage

```js
import { Input } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `id` | An input id | `string` | `false` | - | - |
| `name` | An input name | `string` | `true` | - | - |
| `type` | An input type | `string` | `false` | `text` \| `password` \| `email` \| `url` \| `search` \| `hidden` | `text` |
| `placeholder` | An input placeholder | `string` | `false` | - | - |
| `value` | Default input value | `string` | `false` | - | - |
| `disabled` | Input disabled state. | `boolean` | `false` | `true` \| `false` | `false` |
| `required` | Input required state. | `boolean` | `false` | `true` \| `false` | `false` |
| `onChange` | Callback on input value change. | `function` | `false` | - | - |
| `onError` | Callback on input validation error. | `function` | `false` | - | - |
| `disabled` | Is input disabled. | `boolean` | `false` | `true` \| `false` | `false` |

### Examples

```js
<Input placeholder="Put your content here." />
```

<!-- STORY -->

<br />
