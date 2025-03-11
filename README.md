# react-native-keyboard-avoiding-scrollview

[![npm version](https://img.shields.io/npm/v/react-native-keyboard-avoiding-scrollview.svg)](https://www.npmjs.org/package/react-native-keyboard-avoiding-scrollview)
[![CircleCI Status](https://img.shields.io/circleci/project/github/fivecar/react-native-keyboard-avoiding-scrollview/master.svg)](https://circleci.com/gh/fivecar/workflows/react-native-keyboard-avoiding-scrollview/tree/master)
![license: MIT](https://img.shields.io/npm/l/react-native-keyboard-avoiding-scrollview.svg)
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-lightgrey.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

The modern React Native ScrollView extension that prevents inputs from being
covered by the keyboard. Forked from
[react-native-keyboard-avoiding-scrollview](https://www.npmjs.com/package/react-native-keyboard-avoiding-scrollview)
(that's right - with the hyphen) because it hasn't been maintained in over 6
years.

You should consider using
[react-native-keyboard-controller](https://www.npmjs.com/package/react-native-keyboard-controller),
which is actively maintained and has similar functionality. But it requires
adopting `react-native-reanimated`, which has a variety of app-hanging and
app-freezing issues, so this current package exists for folks who don't want the
risk.

<img src="./.github/demo.gif" width="auto" height="640">

## Getting started

`$ yarn add react-native-keyboard-avoiding-scrollview --save`
OR
`$ npm install react-native-keyboard-avoiding-scrollview --save`

## Usage

Import `KeyboardAvoidingScrollView`, `KeyboardAvoidingFlatList`, or `KeyboardAvoidingSectionList` and use them like the regular `ScrollView`, `FlatList` or `SectionList` components from React Native. Internally, these components are wrapped in another custom component called `KeyboardAvoidingContainer`, which is also exported for advanced use cases.

```javascript
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scrollview';

function MyComponent() {
  return (
    <KeyboardAvoidingScrollView stickyFooter={<Button />}>
      <TextInput />
      <TextInput />
      <TextInput />
    </KeyboardAvoidingScrollView>
  )
}
```

## Props

- [Inherited `ScrollView` props...](https://facebook.github.io/react-native/docs/scrollview.html#props)
  - or [inherited `FlatList` props...](https://facebook.github.io/react-native/docs/flatlist#props)
  - or [inherited `SectionList` props...](https://facebook.github.io/react-native/docs/sectionlist#props)

- [`stickyFooter`](#stickyFooter)
- [`containerStyle`](#containerStyle)

---

# Reference

## Props

### `stickyFooter`

Used to display a fixed view under the scrollable content. Sticky footer is always shown above the keyboard, which could, for example, be the desired behavior for a submit button.

| Type              | Required |
| ----------------- | -------- |
| `React.ReactNode` | No       |

---

### `containerStyle`

Used to style the container component.

| Type                   | Required |
| ---------------------- | -------- |
| `StyleProp<ViewStyle>` | No       |

## License

[MIT License](./LICENSE)
