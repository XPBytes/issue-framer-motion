# issue-framer-motion

Followed instructions on https://moti.fyi/web to get working with webpack 4, then tried upgrading to webpack 5 by using `@expo/webpack-config`. Note that Expo is basically not documenting any of this.

## Issue

This commit 1a4d673 shows the last working state, with webpack 4. `framer-motion` and react-native-reanimated both work.
Upgrading `"@expo/webpack-config"` to `"^18.0.1"` introduces webpack 5.

```
ERROR in ./src/GestureContainer.web.tsx:1
Module not found: Package path ./dist/framer-motion is not exported from package C:\Users\Derk-Jan\Documents\GitHub\issue-framer-motion\node_modules\framer-motion (see exports field in C:\Users\Derk-Jan\Documents\GitHub\issue-framer-motion\node_modules\framer-motion\package.json)
> 1 | import { motion } from "framer-motion";
  2 |
  3 | export function GestureContainer({ children }: { children: React.ReactNode }) {
  4 |   return (

web compiled with 1 error
```

It does not pick up the `config.resolve.alias['framer-motion']` field, despite the [config](https://webpack.js.org/configuration/resolve/#resolvealias) not having changed
