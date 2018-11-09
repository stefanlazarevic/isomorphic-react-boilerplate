# Tag

Element for categorizing or markup.

## When to use?

- It can be used to tag by dimension or property.
- When categorizing.

## Usage

```js
import { Tag } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| ``visible`` | Determine initial visibility state. | ``boolean`` | ``false`` | ``true`` ``false`` | ``true`` |
| ``closable`` | Should component allow visibility state change. | ``boolean`` | ``false`` | ``true`` ``false`` | ``false`` |
| ``active`` | Determine active component state. | ``boolean`` | ``false`` | ``true`` ``false`` | ``false`` |
| ``clickable`` | Should component allow active state change. | ``boolean`` | ``false`` | ``true`` ``false`` | ``false`` |
| ``onClose`` | Callback when component gets closed. | ``function`` | ``false`` | - | - |
| ``onChange`` | Callback when component active state changes. | ``node`` | ``false`` | - | - |
| ``label`` | Content of component. | ``string`` | ``false`` | - | - |
| ``children`` | Content of component. | ``node`` | ``false`` | - | - |
| ``renderAs`` | Determine HTML Element for the component. | ``string`` | ``false`` | HTMLElement | ``div`` |
| ``labelColor`` | Set component's inactive text color. | ``string`` | ``false`` | Hex | theme text primary |
| ``bgColor`` | Set component's inactive background and border color. | ``string`` | ``false`` | Hex | - |
| ``activeLabelColor`` | Set component's active text color. | ``string`` | ``false`` | Hex | theme text primary |
| ``activeBgColor`` | Set component's active background and border color. | ``string`` | ``false`` | Hex | theme text secondary |



### Examples

```js
<Tag>Premium</Tag>
```

<!-- STORY -->

<br />
