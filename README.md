# React-dropdown
[![npm package](https://img.shields.io/npm/v/@midly/react-dropdown)](https://www.npmjs.org/package/@midly/react-dropdown)
[![npm package](https://img.shields.io/bundlephobia/min/@midly/react-dropdown)](https://www.npmjs.org/package/@midly/react-dropdown)
[![npm package](https://img.shields.io/github/last-commit/micheld-dev/react-dropdown)](https://www.npmjs.org/package/@midly/react-dropdown)
[![npm package](https://img.shields.io/npm/dw/@midly/react-dropdown)](https://www.npmjs.org/package/@midly/react-dropdown)

React-dropdown is a simplest way to create a dropdown on your ReactJS site.

- Very small (less than 11Kb)
- Mobile friendly

## Getting Started

Install this package:

```shell
npm i @midly/react-dropdown
```

Import the component, and define the options.

All other attributes are optional.

If a default value is not defined, the first option will be selected.

You can add all ```<select />``` compatible attributes as wanted.

```jsx
import { Dropdown } from '@midly/react-dropdown';

const options = [
 'Sales',
 'Marketing',
 'Engineering',
 'Human Ressources',
 'Legal'
]

<Dropdown
    label="Department" //optional
    labelclassname="block my-1" //optional
    options={options} //required
    defaultValue={Engineering} //optional
    onChange={onChange} //optional
    onBlur={onBlur} //optional
    className="form-select bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" //optional
/>
```