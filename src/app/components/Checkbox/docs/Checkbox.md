# Checkbox

Switching selector.

## When to use?

- Used for selecting multiple values from several options.


## Usage

```js
import { Checkbox } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `checked` | Initial checkbox state. | `boolean` | `false` | `true` \| `false` | `false` |
| `disabled` | Disabled checkbox state. | `boolean` | `false` | `true` \| `false` | `false` |
| `name` | Checkbox form name. | `string` | `true` | - | - |
| `id` | Checkbox component unique id. | `string` | `false` | - | `uid()` |
| `onChange` | On Checkbox state change callback. | `function` | `false` | - | - |

### Examples

```js
<Checkbox name="switch" checked="true" />
```

<!-- STORY -->

<br />
