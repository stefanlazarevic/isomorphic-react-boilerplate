# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When to use?

- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.

## Usage

```js
import { Breadcrumb } from '@components';
```

## API

| Property | Description | Type | Required | Options | Default |
|---|---|---|---|---|---|
| `path` | Static url path to represent with breadcrumb items. | `string` | `false` | - | `location.pathname` \| `/` |
| `mask` | How to represent path items. | `string` | `false` | - | `/` |
| `maskData` | Mapping mask object. | `object` | `false` | - | `{}` |
| `innerRef` | React `ref` callback. | `function` | `false` | - | - |

### Examples

```js

const maskData = {
  category: (prop, field) => {
    const category = field.replace(/(-)/g, ' ');
    return category.charAt(0).toUpperCase() + category.slice(1);
  },
  title: (prop, field) => {
    const title = field.replace(/(-)/g, ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  },
};

<Breadcrumb mask="TV Shows/:category/:title" maskData={maskData}/>
```

<!-- STORY -->

<br />
