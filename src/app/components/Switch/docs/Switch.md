# Switch

Switching selector.

## When to use?

- If you need to represent the switching between two states or on-off state.


## Usage

```js
import { Switch } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `checked` | Initial switch state. | `boolean` | `false` | `true` \| `false` | `false` |
| `disabled` | Disabled switch state. | `boolean` | `false` | `true` \| `false` | `false` |
| `name` | Switch form name. | `string` | `true` | - | - |
| `id` | Switch component unique id. | `string` | `false` | - | `uid()` |
| `onChange` | On Switch state change callback. | `function` | `false` | - | - |

### Examples

```js
<Switch name="switch" checked="true" />
```

<!-- STORY -->

<br />
