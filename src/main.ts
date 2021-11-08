/* eslint-disable no-console */

import Example from './Example';

// No top-level await until ES2022/TS4.5 and esbuild is updated to match.
Example.go().then(console.log);
