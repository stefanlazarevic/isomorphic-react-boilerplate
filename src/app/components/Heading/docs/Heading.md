# Heading

The most important element in data presentation.

## When to use?

- When you need to present title of the page or section.

## Usage

```js
import { Heading } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `level` | Level of the Heading element. | `number` | `true` | `1 - 6` | `1` |
| `text` | Heading content. | `string` | `false` | - | - |
| `children` | Heading content. | `node` | `false` | - | - |
| `uppercase` | Determine if content should be printed in all capital letters. | `boolean` | `false` | `true` `false` | `false` |


### Examples

```js
<Heading level={2} text="Subtitle" />
```

<!-- STORY -->

<br />
