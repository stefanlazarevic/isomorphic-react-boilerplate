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
| `name` | An input name | `string` | `true` | - | - |
| `type` | An input type | `string` | `false` | `text` \| `password` \| `email` \| `url` \| `search` \| `hidden` | `text` |
| `value` | Default input value | `string` | `false` | - | - |
| `placeholder` | An input placeholder | `string` | `false` | - | - |
| `onChange` | Callback on input value change. | `function` | `false` | - | - |
| `onError` | Callback on input validation error. | `function` | `false` | - | - |
| `disabled` | Is input disabled. | `boolean` | `false` | `true` \| `false` | `false` |

### Examples

```js
<Input placeholder="Put your content here." />
```

<!-- STORY -->

<br />
