# Alert

Alert component for feedback.

## When to use?

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

## Usage

```js
import { Alert } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `type` | Type of Alert styles. | `string` | `false` | `info` `success` `error` `warning` | `info` |
| `title` | Heading of Alert. | `string` | `false` | - | Information message: |
| `message` | Content of Alert. | `string` | `false` | - | Information message goes here. |
| `children` | Content of Alert. | `node` | `false` | - | - |
| `autoclose` | Should Alert autoclose. | `boolean` | `false` | `true` `false` | `false` |
| `onClose` | Callback when Alert is closed. | `function` | `false` | - | - |
| `inline` | Show title and message on the same line. | `boolean` | `true` | `true` `false` | `true` |

### Examples

```js
<Alert type="error" title="Error:" message="Failed to remove a user. Please try again." />
```

<!-- STORY -->

<br />
