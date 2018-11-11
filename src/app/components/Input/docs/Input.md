# Input



## When to use?



## Usage

```js
import { Input } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `label` | An input label. | `string` | `false` | - | - |
| `name` | An input name | `string` | `true` | - | - |
| `type` | An input type | `string` | `false` | `text` \| `password` \| `email` \| `url` \| `search` \| `hidden` | `text` |
| `value` | Default input value | `string` | `false` | - | - |
| `placeholder` | An input placeholder | `string` | `false` | - | - |
| `onChange` | Callback on input value change. | `function` | `false` | - | - |
| `onError` | Callback on input validation error. | `function` | `false` | - | - |
| `autoComplete` | Does input support autocompletion. | `boolean` | `false` | `true` \| `false` | `false` |
| `disabled` | Is input disabled. | `boolean` | `false` | `true` \| `false` | `false` |
| `prefix` | Text to prepend to the input value. | `string` | `false` | - | - |
| `suffix` | Text to append to the input value. | `string` | `false` | - | - |

### Examples

```js
<Input placeholder="Put your content here" />
```

<!-- STORY -->

<br />
