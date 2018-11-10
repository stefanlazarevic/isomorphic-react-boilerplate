# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

## Usage

```js
import { Avatar } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `src` | Source of avatar image. | `string` | `false` | - | - |
| `alt` | Description of avatar image. | `string` | `true` if `src` is present. | - | - |
| `shape` | The shape of avatar. | `string` | `false` | `circle` \| `square` | `circle` |
| `size` | The size of avatar in pixels. | `number` | `false` | - | `60` |
| `letter` | Letter to show if image source is missing. | `string` | `true` | - | - |
| `bgColor` | Avatar's background color. | `string` | `false` | Hex | `#efefef` |
| `labelColor` | Avatar's letter color. | `string` | `false` | Hex | `#333` |
| `onError` | Callback function for failed image load. | `function` | `false` | - | - |


### Examples

```js
<Avatar src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
```

<!-- STORY -->

<br />
