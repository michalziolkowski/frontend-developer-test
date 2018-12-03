
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Design](#design)
  - [Research](#research)
  - [Prototype](#prototype)
  - [Atomic Structure](#atomic-structure)
- [Stack Overview](#stack-overview)
  - [App](#app)
  - [Compilation & Type check](#compilation--type-check)
  - [Static Code Analysis](#static-code-analysis)
  - [Testing & Docs](#testing--docs)

# Design

## Research

I have reviewed several dating apps to find inspiration for UI, mainly focusing on users list as this is what the test task is about. Here are some features I liked.

- **Tinder**
  - Swiping mechanism for user like/dislike. At this point it is very natural for dating apps because of Tinder's success and it makes browsing and interacting with user list very dynamic and quick.
  - Browsing user photos by clicking on part of an image

- **Happn**
  - This one has a vertical list, if you want to skip user just swipe down as you do on social apps when not interested in content

## Prototype

I have merged some properties of reviewed apps that I liked and came up with original design with **FeelD** brand colors.

![App Design](https://raw.githubusercontent.com/michalziolkowski/frontend-developer-test/master/img/design.png)

## Atomic Structure

I have decided to use atomic design for components structure as I find it understandable and clear. It is also a good bridge between designing and developing React apps.

![App Atomic Structure](https://raw.githubusercontent.com/michalziolkowski/frontend-developer-test/master/img/atomic-structure.png)

# Stack Overview

I have picked dependencies that fit project's need and I'm familiar to.
Below is an overview of why I choose these packages.

## App

- **Expo** - tool-chain for React Native development.
  - expo is a public app for iOs/Android that can receive js code directly from local packager.
  - saves a lot of time and pain related to native code setup, builds, deploy and allows publishing updates very effectively.
  - it isn't perfect as you can only use native functionalities that are already supported by expo but will completely work for this project.

- **Styled Components** - css-in-js library that supports React Native.
  - styled components provides RN primitives and lets you style them using css syntax in a very clean way.
  - supports global themes and injecting style depending on props.

- **Redux** - library for state management.
  - components can be completely independent of application state, therefore can focus strictly on user interface. This keeps the code clean but also makes testing UI much simpler as there is much less need for mocking.
  - it also makes it easier to understand the state and debug it through reducers.
  - redux structure allows executing synchronous and asynchronous code undistinguishable for components layer which makes it easy to work with.

## Compilation & Type check

- **TypeScript** - typed superset of JS that compiles to JS
  - type checking speeds up development because of IDE support hints
  - makes it possible to view library contents without reaching to docs
  - compiles to optimized JS code
  - makes you find out your bugs in early stage of development
  - excludes possibility of making type mistake that would result with an error
  - is much faster than Flow solution

- **Babel** - JS compiler
  - in this solution it compiles TypeScript generated JS
  - provides easy way to include plugins, presets

## Static Code Analysis

- **TSLint** - linter for TypeScript
  - checks code for readability, maintainability and functionality errors
  - makes you catch a bug in early stage
  - this project is using airbnb preset as I find it a clean and vast set of rules

- **Prettier** - code formatter
  - works with TSLint
  - set of code styling rules that allows whole team working on same conditions
  - makes git commits much cleaner as you don't commit extra lines, unordered imports, etc.

## Testing & Docs

- **Jest** - testing platform
  - fast, parallel tests execution
  - includes mocking functionality
  - simple configuration
  - provides tests coverage

- **Enzyme** - testing utility
  - makes it easier to assert, manipulate components output
  - is very fast, especially when rendering shallow components

- **Storybook** - development environment for UI components
  - provides living documentation
  - simplifies components development as you can run, style, test in isolated environment without app-specific dependencies
  - provides addons like knobs/actions and many more tools to keep all of your component knowledge and testing/viewing in one place.
